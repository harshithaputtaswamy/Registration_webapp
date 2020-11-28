import firebase_admin
import json
from firebase_admin import credentials, firestore
databaseURL = {'databaseURL': "https://test-6f02d.firebaseio.com"}
cred = credentials.Certificate("ServiceAccountKey.json")
firebase_admin.initialize_app(cred, databaseURL)
db = firestore.client()
data_file = open('regs', 'w', encoding='utf-8')
for k in db.collection('laughing_out_loud').get():
    json.dump(k.to_dict(), data_file)
    #print(k.to_dict())
    data_file.write('\n')
    #break