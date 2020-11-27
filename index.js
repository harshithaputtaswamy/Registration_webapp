const express = require("express");

const port = process.env.PORT || 3000;

var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://event-reg-backend.firebaseio.com/"
});

const db = admin.firestore();

const app = express();

const bodyParser = require('body-parser');
const { Http2ServerResponse } = require("http2");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var cors = require("cors");
var cors_options = {
  origin : '*',

}
app.use(cors(cors_options));

app.get('/', (req, res) => {
    res.send('Hello World!')
});
  

app.post('/register',(req, res) => {
    //Call this function when sign up happens
  const user_obj = req.body;
  const event_name = String("laughing_out_loud")
  const user_data = {
    user_name: user_obj.name,
    user_email: user_obj.email,
    user_tel: user_obj.tel,
    user_whatsapp: user_obj.WhatsApp,
    user_profession: user_obj.profession,
    user_start_date: user_obj.startdate,
    user_state: user_obj.state,
    user_city: user_obj.city,
    user_mentor: user_obj.mentor,
    user_workshop: user_obj.workshop
  };
  console.log(user_data);
  var temp = {
    "status" : 0 
  }
  return db
    .collection(event_name)
    .doc(user_data.user_email)
    .set(user_data)
    .then(() => {
      console.log("new user added");
      temp.status = 200;
      res.send(temp);
    })
    .catch(()=>{
      console.log("Unable to add user");
      temp.status = 404 ;
      res.send(temp);
    });
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
    