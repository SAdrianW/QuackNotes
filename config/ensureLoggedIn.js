module.exports = function(res, req, next) {
    if (!req.user) return res.status(401).JSON('Unauthorized');
    next();
};