/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-05-20 11:50:33
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-10 10:51:38
 * @FilePath: \Vue3-ts\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		AutoImport({
			// Auto import functions from Vue, e.g. ref, reactive, toRef...
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],

			// Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
			// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
			resolvers: [ElementPlusResolver()],

			dts: resolve(pathSrc, 'auto-imports.d.ts')
		}),

		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[dir]-[name]'
		}),

		Components({
			resolvers: [
				// Auto register Element Plus components
				// 自动导入 Element Plus 组件
				ElementPlusResolver()
			],

			dts: resolve(pathSrc, 'components.d.ts')
		})
	],

	css: {
		// 预处理器配置项
		preprocessorOptions: {
			less: {
				math: 'always'
			}
		}
	},

	resolve: {
		alias: {
			'@': pathSrc
		}
	},

	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true
			}
		}
	}
})
