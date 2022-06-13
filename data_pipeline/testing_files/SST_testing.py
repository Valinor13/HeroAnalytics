import os
from google.cloud import speech

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'client_service_key.json'
speech_client = speech.SpeechClient()

# Transcribe Local Media File
# File size: < 10mbs, len < 1 minute

## Step 1. Load media file (transcribe)
# media_file = 'harvard.wav'

# with open(media_file, 'rb') as f1:
#     byte_data = f1.read()

# audio = speech.RecognitionAudio(content=byte_data)

# ## Step 2. Configure media file output
# config = speech.RecognitionConfig(
#     sample_rate_hertz=44100,
#     enable_automatic_punctuation=True,
#     language_code='en-US',
#     audio_channel_count=2
# )

# ## Step 3. Transcribe RecongnitionAudio object
# response = speech_client.recognize(
#     config=config,
#     audio=audio
# )
# print(response)

# ## Transcribe long media file
media_uri = 'gs://hero-speech-to-text-media-files/testing_converted.wav'
long_audio = speech.RecognitionAudio(uri=media_uri)

config_enhanced = speech.RecognitionConfig(
    sample_rate_hertz=48000,
    enable_automatic_punctuation=True,
    language_code='en-US',
    # use_enhanced=True,
    model='video'
)

operation = speech_client.long_running_recognize(
    config=config_enhanced,
    audio=long_audio
)
response = operation.result(timeout=90)

response = response.join(' ')

print(response)

for result in response.results:
    print(result.alternatives[0].transcript)
    print(result.alternatives[0].confidence)
    print()
