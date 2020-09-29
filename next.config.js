/* eslint-disable prettier/prettier */
const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
});

module.exports = {
    target: 'serverless'
}