const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const AuthHandler = require('./../handlers/auth.handler');

const routes = (app) => {
    app.use('/auth', authRoute);
    app.use('/api', AuthHandler.authenticate);
    app.use('/api/user', userRoute);
};

module.exports = routes;
