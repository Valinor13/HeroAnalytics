from google.cloud import storage
from google.cloud import speech
import json
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'dev_service_key.json'


def transcribe(encoded):
    """Transcribes base64 encoded audio"""
    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(content=encoded)
    config = speech.RecognitionConfig(
        language_code="en-US",
        enable_automatic_punctuation=True,
        audio_channel_count=2
    )

    response = client.recognize(config=config, audio=audio)

    transcription = ""

    for i, result in enumerate(response.results):
        # If/else determines when to add spaces for concatenation
        # There will be no trailing space added for the final transcription segment
        if i == (len(response.results) - 1):
            transcription += result.alternatives[0].transcript
        else:
            transcription += result.alternatives[0].transcript + ' '

    return transcription


if __name__ == '__main__':
    bucket = "heroxr-development.appspot.com"
    file_name = "sample.json"
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket)
    blob = bucket.blob(file_name)
    data = json.loads(blob.download_as_string(client=None))
    # print(data)
    # with open("sample.json", 'r') as json_file:
    #     data = dict(json.load(json_file))
    encoded = data['encoding'][2:-1]
    transcription = transcribe(encoded)
    print(transcription)