let siteMdl = require("../model/siteMdl.js");
let crypto = require("crypto");

function randStr(size = 9){
    return crypto
    .randomBytes(size)
    .toString("hex")
    .slice(0, size);
}

module.exports.gethome = (req, res) => {
    let cookies = req.cookies;

    res.clearCookie("shorthash");

    res.render("index", {
        shorturl: cookies.shorthash
    });

}

module.exports.posthome = (req, res) => {

    let shortHash = randStr();

    let targetSite = new siteMdl({
        longUrl: req.body.inoutUrl, 
        shortUrl: shortHash
    });

    targetSite.save().then(() => {
        console.log(req.body.inoutUrl+" -> link saved at "+shortHash);
    });

    res.clearCookie("shorthash");
    res.cookie("shorthash", shortHash);

    console.log(shortHash);

    res.redirect("/");
}

module.exports.directsite = (req, res) => siteMdl.findOne(
    { shortUrl: req.params.paramId }, (err, result) => {
        res.redirect(result.longUrl);
    });
    
