import json
import os
import shutil
from zipfile import ZipFile
from zipfile import is_zipfile
from google.cloud import firestore
from google.cloud import speech
from google.cloud import storage
from google.cloud import language_v1
import io


# Entrypoint
def main(event, context):
    """Triggered by a change to a Cloud Storage bucket.
    Args:
         event (dict): Event payload.
         context (google.cloud.functions.Context): Metadata for the event.
    """
    file = event
    print(f"Processing file: {file['name']}.")
    print(event)

    if file['name'].endswith(".zip"):
        # Extract zip file to temp directory
        temp_dir = "temp/"
        bucket = file['bucket']
        file_path = file['name']
        zip_extract(bucket, file_path, temp_dir)

        # Transcribe .wav file
        wav_media_uri = get_path(temp_dir, ".wav")
        print(wav_media_uri)
        transcription = speech_to_text(wav_media_uri)
        print(transcription)
        exit()

        # Get sentiment of transcription
        magnitude, score = analyze_sentiment(transcription)

        # Update json with transcription, magnitude, and score
        json_media_uri = get_path(temp_dir, ".json")
        update_json(json_media_uri, transcription, magnitude, score)

        # Store in FireStore DB
        collection = u"testExperience1"
        document = u"test" # Change to actual document name
        add_to_firestore(json_media_uri, collection, document)

        # Remove temp directory
        if os.path.exists(temp_dir) and os.path.isdir(temp_dir):
            shutil.rmtree(temp_dir)


def add_to_firestore(json_media_uri, collection, document):
    """Adds a document to a Firestore collection
    Args:
        collection (str): the collection to add the document to
        document (str): the document to add
    """
    db = firestore.Client()
    doc_ref = db.collection(collection)#.document(document)
    doc_ref.set(json_media_uri)


def update_json(json_media_uri, transcription, magnitude, score):
    """Updates the JSON file within the bucket
    Args:
        json_media_uri (str): the file path to JSON file in Google Storage bucket
    """
    with open(json_media_uri) as json_file:
        experience_dict = json.load(json_file)

    experience_dict['transcription'] = transcription
    experience_dict['magnitude'] = magnitude
    experience_dict['score'] = score

    with open(json_media_uri) as json_file:
        json.dump(experience_dict, json_file)


def speech_to_text(media_uri):
    """Converts .wav files to text
    Args:
        medai_uri (str): path to file within bucket
    Returns:
        transcription (str): the transcription of the audio file
    """
    speech_client = speech.SpeechClient()
    long_audio = speech.RecognitionAudio(uri=media_uri)

    config = speech.RecognitionConfig(
        sample_rate_hertz=48000, # Change to match sampling rate of unity files
        enable_automatic_punctuation=True,
        language_code='en-US'#,
        #audio_channel_count=2
    )

    # We use long_running_recognize because media files might be over 1 minute in length
    operation = speech_client.long_running_recognize(
        config=config,
        audio=long_audio
    )
    response = operation.result(timeout=90)

    transcription = ""
    for i, result in enumerate(response.results):
        # If/else determines when to add spaces for concatenation
        # There will be no trailing space added for the final transcription segment
        if i == (len(response.results) - 1):
            transcription += result.alternatives[0].transcript
        else:
            transcription += result.alternatives[0].transcript + ' '

    return transcription


def analyze_sentiment(transcription):
    """Analyzes the sentiment of a transcribed audio file.
    Args:
        transcription (str): the transcription to analyze
    """
    client = language_v1.LanguageServiceClient()
    document = language_v1.Document(
        content=transcription, type_=language_v1.Document.Type.PLAIN_TEXT
    )
    annotations = client.analyze_sentiment(request={'document': document})

    magnitude = annotations.document_sentiment.magnitude
    score = annotations.document_sentiment.score
    
    return magnitude, score


def get_path(dir, extension):
    """Gets the path to a file with a specified extension
    Args:
        dir (str): the directory to find the file in
        extension (str): the file extension to search for
    Returns:
        media_uri (str): the path to the file within the Google Storage bucket
    """
    for root, dirs, files in os.walk(dir):
        for file in files:
            if file.endswith(extension):
                media_uri = os.path.join(root, file)

    return media_uri


def zip_extract(bucket_name, zip_path, target_dir):
    """Extracts a zip file to a directory
    Args:
        bucket_name (str): name of bucket where file is located
        zip_path (str): path to zip file
        target_dir (str): path to directory to where files will be extracted
    """
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)

    destination_blob_pathname = zip_path

    blob = bucket.blob(destination_blob_pathname)
    zipbytes = io.BytesIO(blob.download_as_string())

    if is_zipfile(zipbytes):
        with ZipFile(zipbytes, 'r') as zip_ref:
            for content_filename in zip_ref.namelist():
                content_file = zip_ref.read(content_filename)
                blob = bucket.blob(zip_path + '/' + content_filename)
                blob.upload_from_string(content_file)
