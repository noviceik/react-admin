import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [react(),], css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${path.resolve(__dirname, 'src/index.less')}";`,
          javascriptEnabled: true,
        }
      },
    },

    // 配置别名
    resolve: {
      alias: {
        '@': resolve('src'),
      },
      // 忽略后缀名的配置选项
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    //启动服务配置
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0" 也可设置成你的ip地址
      host: '0.0.0.0',
      port: 2635,
      open: true,
      https: false,
      cors: true,
      // 代理跨域（模拟示例）
      proxy: {
        // "/api": {
        //   target: "", // easymock
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, "")
        // }
      }
    },
    // 生产环境打包配置
    //去除 console debugger
    // esbuild: {
    //   pure:mode==='production' ? ["console.log", "debugger"] : []
    // },

    // build: {
    //   terserOptions: {
    //     compress: {
    //       drop_console: true,
    //       drop_debugger: true,
    //     },
    //   },
    // },
  }

})
