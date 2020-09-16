const siteTitle='正尚网络科技'


module.exports = {
    publicPath: './',
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // 要公用的scss的路径
                    resources: './global.scss'
                })
                .end()
        })
        config.plugin('html')
            .tap(args => {
                args[0].title = siteTitle;
                return args;
            })
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    // 补全css前缀(解决兼容性)
                    require("autoprefixer")(),
                    // 把px单位换算成rem单位
                    require("postcss-pxtorem")({
                        rootValue: 75, // 换算的基数(设计图750的根字体为32)
                        selectorBlackList: [".van", ".my-van"],// 要忽略的选择器并保留为px。
                        propList: ["*"], //可以从px更改为rem的属性。
                        minPixelValue: 2 // 设置要替换的最小像素值。
                    })
                ]
            }
        }
    },

}