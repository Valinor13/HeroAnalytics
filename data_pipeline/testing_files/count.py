from google.cloud import firestore
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'json_files/dev_service_key.json'


def get_count(collection):
    """"""
    db = firestore.Client()
    doc_ref = db.collection(collection).document(u'count')
    doc = doc_ref.get().to_dict()
    count = doc['count']
    new_count = count + 1
    doc = {'count': new_count}
    doc_ref.set(doc)
    print(count, new_count)
    # storage_client = storage.Client()
    # bucket = storage_client.get_bucket(bucket_name)
    # blob = bucket.blob(blob_name)
    # counter = int(blob.download_as_string(client=None))
    # counter += 1

    # return counter


get_count('testExperience1')