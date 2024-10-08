module.exports = {
  // 默认情况下，Vue CLI假设你的应用将被部署在域名的根目录下
  // 如果应用被部署在一个子路径下，你需要在这里指定子路径
  // 例如，如果你的应用被部署在 https://www.my-domain.com/my-app/
  // 那么将这个值改为 '/my-app/'
  publicPath: process.env.NODE_ENV === 'production' ? '/lucaslyc.github.io/lio.io/lio.io/' : '/'
}







