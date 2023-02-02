const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/JaviCandeira.github.io/portfolio',
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
  transpileDependencies: true
})
