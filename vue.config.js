const { defineConfig } = require('@vue/cli-service')
//const { VueLoaderPlugin } = require('vue-loader')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{ //proxy跨域配置
    //port:8000,
    proxy:{
      '/api':{
        target:'http://192.168.1.239:9090',
        pathRewrite: { // 重写
          '^/api':''
        },
        ws:false,
        changeOrigin:true
      }
    }
  },
  lintOnSave:false
})
