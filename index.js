// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// var router = express.Router();

// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 

// const playersRouter = require("./routes/players");
// app.use("/players", playersRouter);

// module.exports = function (app) {
//     app.use('/', router);
// };

// app.listen(port, function() {
//   console.log("Runnning on " + port);
// });

// module.exports = app;

// var express = require('express');
// var router = express.Router();
 
// module.exports = function (app) {
//   app.use('/', router);
// };
 
// router.get('/', function (req, res, next) {
 
//     var vCardsJS = require('vcards-js');
 
//     //create a new vCard
//     vCard = vCardsJS();
 
//     //set properties
//     vCard.firstName = 'Eric';
//     vCard.middleName = 'J';
//     vCard.lastName = 'Nesser';
//     vCard.organization = 'ACME Corporation';
 
//     //set content-type and disposition including desired filename
//     res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
//     res.set('Content-Disposition', 'inline; filename="enesser.vcf"');
 
//     //send the response
//     res.send(vCard.getFormattedString());
// });