const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

function sendEmail(name, txt)
{
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth : {
			user: "mayur.react.aug@gmail.com",
			pass: "avsfycxcotqquwsw"
		}
	})

	let mailOptions = {
		from : "mayur.react.aug@gmail.com",
		to : "classeskamalsir@gmail.com",
		subject: "Enquiry from " + name,
		text : txt
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) 
			console.log("mail err ", err);
		else
			console.log("mail send" , info.response);
	})
}


app.post("/save", (req, res) => {
		let name = req.body.name;
		let txt = "phone " + req.body.phone + " query = " + req.body.query; 

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth : {
			user: "mayur.react.aug@gmail.com",
			pass: "avsfycxcotqquwsw"
		}
	})

	let mailOptions = {
		from : "mayur.react.aug@gmail.com",
		to : "classeskamalsir@gmail.com",
		subject: "Enquiry from " + name,
		text : txt
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) 
			res.status(500).json({success:true, message:"server error "});
		else
			res.status(200).json({success:true, message:"email sent"});
	})
});

app.listen(9000, () => { console.log("server ready @ 9000"); } )

