// 
// use .env file as process.env configuration
// 
require("dotenv").config();

// 
// initialization
// 
let express = require("express");
let cookieparser = require("cookie-parser");
let bodyparser = require("body-parser");
let app = express();
let port = process.env.PORT;

// 
// call siteController.js
// 
let siteController = require("./controller/siteController.js");

// 
// set view engine to ejs
// 
app.set("view engine", "ejs");

// 
// use all required middleware
// 
app.use(express.static("public"));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// 
// home route
// 
app.route("/").get(siteController.gethome).post(siteController.posthome);
app.post("api/urlresult", (req, res) => {
});
// 
// host details, used for front end
// 
app.get("/api/hostdetails", siteController.hostpass);
// 
// get called if the link is not available on database
// 
app.get("/404", siteController.emptylink);
// 
// will redirect to certain url when the paramId is available on database
// 
app.get("/:paramId", siteController.directsite);

// 
// listen to given port based on process.env.PORT
// 
app.listen(port, () => console.log("Listening at port "+port));
