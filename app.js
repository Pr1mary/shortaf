require("dotenv").config();

let express = require("express");
let cookieparser = require("cookie-parser");
let bodyparser = require("body-parser");
let app = express();
let port = process.env.PORT;

let siteController = require("./controller/siteController.js");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.route("/").get(siteController.gethome).post(siteController.posthome);
app.post("api/urlresult", (req, res) => {

});
app.get("/api/hostdetails", siteController.hostpass);
app.get("/404", siteController.emptylink);
app.get("/:paramId", siteController.directsite);

app.listen(port, () => {
    console.log("Listening at port "+port);
});
