import base64
import json


audio_file = "audio_files/HEROwavtest.wav"

encode = base64.b64encode(open(audio_file, 'rb').read())
print(len(encode))

# with open("json_files/workingDevFakeData.json", 'r') as json_file:
#     data = dict(json.load(json_file))
# data['encoding'] = str(encode)

# with open("json_files/workingDevFakeData.json", 'w') as json_file:
#     json.dump(data, json_file)
