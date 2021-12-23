module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '/',
    assetsDir: 'blog/',
    outputDir: 'docs',
    devServer: {
        port: 8888,
    },
    lintOnSave: false
}
