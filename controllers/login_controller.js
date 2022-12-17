var User = require('../models/user');
async function index(req, res, next) {
    res.render('login/index');
}

async function create(req, res, next) {
    console.log(req.body);

    var user = await User.findOne({email: req.body.uname})
    
    if(!user){
        res.render('login/index');
        return;
    }

    if(user.password != req.body.psw){
        res.render('login/index');
        return;
    }
    console.log(user);
    res.render('trangchu');
}

module.exports = {
    index,
    create
}