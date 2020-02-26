module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "views": "@/views",
        "components": "@/components",
        "network": "@/network",
        "common": "@/common"
      }
    }
  }
}