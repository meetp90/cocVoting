const express = require("express");

//SK259a2b9ba25c64a08bb566263f0d9a1d AC7dbc21f5f1e0aa138f3f3a558b958683
const accountSid = "AC7dbc21f5f1e0aa138f3f3a558b958683";
const authToken = "4741283bad7dc78ea46cca972dd00f77";
const client = require("twilio")(accountSid, authToken);

const app = express();
const port = 3001;
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.post("/verification", (req, res) => {
	const otp = req.body;

	console.log(otp);

	// client.messages
	// .create({
	//     from: "+15676777560",
	//     to: "+919969140208",

	// })
	// .then((message) => console.log(message.sid))
	// .done();
});

app.listen(port, () => {
	console.log("app listenin");
});
