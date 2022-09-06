const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const resolve = (dir) => path.join(__dirname, dir) // 路径

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 别名设置
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})
