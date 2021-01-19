let express = require("express");
let app = express();
let ejs = require("ejs");
let port = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        data: {
            makanan: "nasi",
            harga: 10000
        }
    });
});

app.get("/:paramId", (req, res) => {
    let key;
    if(req.params.paramId === "help"){
        key = "Get some help!";
    }else{
        key = req.params.paramId + " is the key";
    }
    res.send(key);
});

app.listen(port, () => {
    console.log("Listening at port "+port);
});
