const rateLimit = require('express-rate-limit');
const { logEvents } = require('./logger');

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: {
        message: 'Too many login attempts, please try again later'
    },
    handler: (req, res, next, option) => {
        logEvents(`${req.ip} has exceeded the 5 requests per 1 minutes limit`, 'errLog.log')
        res.status(option.statusCode).json(option.message)
    },
    stadardheaders: true,
    legacyHeaders: false,
});

module.exports = loginLimiter;