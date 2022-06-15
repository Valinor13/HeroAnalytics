def hello_gcs(event, context):
    """Triggered by a change to a Cloud Storage bucket.
    Args:
         event (dict): Event payload.
         context (google.cloud.functions.Context): Metadata for the event.
    """
    file = event
    print(f"Processing file: {file['name']}.")
    print(event)
    media_uri = f"gs://heroxr-development.appspot.com/{file['name']}"

    speech_to_text(media_uri)


def speech_to_text(media_uri):
     from google.cloud import speech
     speech_client = speech.SpeechClient()

     long_audio = speech.RecognitionAudio(uri=media_uri)

     config = speech.RecognitionConfig(
          sample_rate_hertz=44100,
          enable_automatic_punctuation=True,
          language_code='en-US',
          audio_channel_count=2
     )

     operation = speech_client.long_running_recognize(
          config=config,
          audio=long_audio
     )
     response = operation.result(timeout=90)

     print(response)