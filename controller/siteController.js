let siteMdl = require("../model/siteMdl.js");
let crypto = require("crypto");

// randomize string
function randLength(min, max) {
    return Math.random() * (max - min) + min;
}
function randStr(size = randLength(7, 9)){
    return crypto
    .randomBytes(size)
    .toString("hex")
    .slice(0, size);
}

// get home controller
module.exports.gethome = (req, res) => {
    let cookies = req.cookies;

    res.clearCookie("shortlink");

    res.render("index", {
        shorturl: cookies.shortlink
    });

}

// post home controller
module.exports.posthome = (req, res) => {

    let cookies = req.cookies;

    let shortHash = cookies.shortLink;

    let longurl = req.body.inoutUrl;

    if(!longurl.includes(process.env.DOMAIN)){

        shortHash = randStr();

        let targetSite = new siteMdl({
            longUrl: longurl, 
            shortUrl: shortHash
        });
    
        targetSite.save().then(() => console.log(req.body.inoutUrl+" -> link redirect to "+shortHash));
    
    }else console.log("already shortaf link");
    
    if(process.env.PORT == 80)
        res.cookie("shortlink", process.env.DOMAIN+"/"+shortHash);
    else
        res.cookie("shortlink", process.env.DOMAIN+":"+process.env.PORT+"/"+shortHash);
    
    console.log(shortHash);

    res.redirect("/");
}

// redirect site controller
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

// empty link 404 controller
module.exports.emptylink = (req, res) => res.render("emptylink");

// host details api
module.exports.hostpass = (req, res) => {
    res.send({
        domain: process.env.DOMAIN,
        port: process.env.PORT
    });
}

