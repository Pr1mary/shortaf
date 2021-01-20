let express = require("express");
let cookieparser = require("cookie-parser");
let bodyparser = require("body-parser");
let app = express();
let port = process.env.PORT || 8000;

let siteController = require("./controller/siteController.js");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", siteController.gethome);
app.post("/", siteController.posthome);
app.get("/:paramId", siteController.directsite);

app.listen(port, () => {
    console.log("Listening at port "+port);
});
