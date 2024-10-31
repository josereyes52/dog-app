const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/servicios': {
        target: 'https://hipicous.lottomovilrd.com:8090',
      }
    }
  }
})
