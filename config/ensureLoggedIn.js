module.exports = function(req, res, next) {
    if (!req.user) return res.status(401).JSON('Unauthorized');
    next();
};