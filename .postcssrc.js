// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, // 处理元素容器宽高比
    "postcss-write-svg": {
        utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
        viewportWidth: 750,     // (Number)视窗的宽度 设计稿的宽度 750
        viewportHeight: 1334,    // (Number)视窗的高度，根据750设备的宽度来指定，一般指定1334
        unitPrecision: 3,       // (Number)指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',     // (String)指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'],  // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // (Number) 小于或等于`1px`不转换为视窗单位
        mediaQuery: false       // (Boolean) 允许在媒体查询中转换`px`
    }, 
    "postcss-viewport-units":{},
    "cssnano": {
        preset: "advanced",
        autoprefixer: false, // cssnext已有autoprefixer
        "postcss-zindex": false
    }
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {} // cssnext和cssnano都具有autoprefixer,所以删掉
  }
}
