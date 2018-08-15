module.exports = {
    mode: "production",
    entry: './lib/index-Browser.js',
    output: {
        filename: "littleMvvm.min.js"
    },
    resolve: {
        extensions: [".js"]
    },
    devServer: {
        open: true,
        port: 8086
    }
}