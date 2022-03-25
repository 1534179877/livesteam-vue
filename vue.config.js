const { defineConfig } = require('@vue/cli-service')
//const { VueLoaderPlugin } = require('vue-loader')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{ //proxy跨域配置
    port:8000,
    proxy:{
      '/api':{
        target:'http://localhost:7001',
        pathRewrite:{'^/api':''},
        ws:false,
        changeOrigin:true
      }
    }
  },
  lintOnSave:false
})
