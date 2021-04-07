module.exports = function(req, res, next) {
    if (!req.session.username) {
        console.log('Not logged in. redirecting to login page.')
        res.redirect('/login');
    } else {
        return next();
    }
}