var express = require("express");
var app = express();
var path = require("path");
const cors = require('cors');
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 4202;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})