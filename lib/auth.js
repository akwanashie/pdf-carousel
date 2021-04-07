module.exports = function(req, res, next) {
    console.log(JSON.stringify(req.session, null, 2));
    if (!req.session.username) {
        console.log('Not logged in. redirecting to login page.')
        res.redirect('/login');
    } else {
        return next();
    }
}