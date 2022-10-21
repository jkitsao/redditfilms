const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public', disable: false,
        disable: process.env.NODE_ENV === 'development',
    }
})

