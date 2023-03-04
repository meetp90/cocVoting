const express = require("express");

//SK259a2b9ba25c64a08bb566263f0d9a1d AC7dbc21f5f1e0aa138f3f3a558b958683
const accountSid = "AC7dbc21f5f1e0aa138f3f3a558b958683";
const authToken = "56ca774c6a04e849d32eeb9d08e67c60";
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
	try {
		const otp = req.body.otp;
		console.log("balle balle", otp);
		sendtext();
		res.status(200).json(otp);
	} catch (err) {
		console.log(err);
	}
});

app.listen(port, () => {
	console.log("app listenin");
});

function sendtext() {
	client.messages
		.create({
			from: "+15676777560",
			to: "+919969140208",
			body: "hi varun",
		})
		.then((message) => console.log(message.sid))
		.done();
}
