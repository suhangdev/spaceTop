const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

module.exports = withCss(withLess({
    lessLoaderOptions : {
        javascriptEnabled : true
    },
    node: {
        fs: 'empty'
    },
}))