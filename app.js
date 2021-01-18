let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});



app.listen(8000, () => {
    console.log("Listening at port 8000");
});