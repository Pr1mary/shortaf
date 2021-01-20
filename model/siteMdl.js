let mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_URI+"/"+process.env.DB_NAME,
    { useNewUrlParser: true, useUnifiedTopology: true }
    );

let siteSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String
});

module.exports = mongoose.model("sitelist", siteSchema);