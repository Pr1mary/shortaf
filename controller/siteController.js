let siteMdl = require("../model/siteMdl.js");
let crypto = require("crypto");

function randLength(min, max) {
    return Math.random() * (max - min) + min;
}

function randStr(size = randLength(7, 9)){
    return crypto
    .randomBytes(size)
    .toString("hex")
    .slice(0, size);
}

module.exports.gethome = (req, res) => {
    let cookies = req.cookies;

    res.clearCookie("shortlink");

    res.render("index", {
        shorturl: cookies.shortlink
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

    res.clearCookie("shortlink");

    if(process.env.PORT == 80)
        res.cookie("shortlink", process.env.DOMAIN+"/"+shortHash);
    else
        res.cookie("shortlink", process.env.DOMAIN+":"+process.env.PORT+"/"+shortHash);
    
    console.log(shortHash);

    res.redirect("/");
}

module.exports.directsite = (req, res) => {

    let shorturl = req.params.paramId;

    siteMdl.findOne({ shortUrl: shorturl }, (err, result) => {
        try {
            res.redirect(result.longUrl);
        } catch (error) {
            res.redirect("/404");
        }
        
    });

    
}
    
