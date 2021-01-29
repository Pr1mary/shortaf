// 
// initialize mongoose
// 
let mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_URI+"/"+process.env.DB_NAME,
    { useNewUrlParser: true, useUnifiedTopology: true }
    );

// 
// construct mongodb schema
// 
let siteSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String
});

// 
// export mongodb model
// 
module.exports = mongoose.model("sitelist", siteSchema);