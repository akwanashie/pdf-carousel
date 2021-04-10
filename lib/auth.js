const db = require('./db');
const bcrypt = require('bcrypt');

async function areCredentialsValid(userName, password) {
    try {
        const result = await db.any('SELECT password FROM public.users where username=$1', [userName]);
        return result.length > 0 && bcrypt.compareSync(password, result[0].password);
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function isUserLoggedIn(req, res, next) {
    if (!req.session.username) {
        console.log('Not logged in. redirecting to login page.')
        res.redirect('/login');
    } else {
        return next();
    }
}

module.exports = { areCredentialsValid, isUserLoggedIn }