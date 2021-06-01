const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")

const contactAddress = "pssanthoshaditya2000@gmail.com"

const app = express()
app.use(bodyParser.urlencoded())

const mailer = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user:process.env.GMAIL_ADDRESS,
        pass:process.env.GMAIL_PASSWORD,
    }
})

app.post("/contact",(req,res)=>{
    mailer.sendMail(
        {
            from:req.body.from,
            to:[contactAddress],
            subject: req.body.subject || "[No Subject]",
            html:req.body.message || "h[No Message]",
        },
        function(err,info) {
            if(err) return res.status(500).send(err)
            res.json({success:true})
        }
    )
})

app.listen(3000)