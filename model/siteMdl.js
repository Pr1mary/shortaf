let mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/",
    { useNewUrlParser: true, useUnifiedTopology: true }
    );

let siteSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String
});

module.exports = mongoose.model("sitelist", siteSchema);