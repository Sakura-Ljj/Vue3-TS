/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-01 17:32:30
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-04 16:21:47
 * @FilePath: \Vue3-ts\src\hooks\useEchars.ts
 * @Description:
 */
import { onDeactivated, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

export const useEchars = (myEchars: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	// 把配置信息设置进echars实例中
	if (options && typeof options === 'object') {
		myEchars.setOption(options)
	}

	// 创建一个更新echars大小的函数
	const echarsResize = () => {
		myEchars && myEchars.resize()
	}

	// 访问组件的时候监听窗口大小变化, 调用函数
	window.addEventListener('resize', echarsResize)

	// 失焦时移除监听事件
	onBeforeUnmount(() => {
		window.removeEventListener('resize', echarsResize)
	})

	// 页面卸载时移除监听事件
	onDeactivated(() => {
		window.removeEventListener('resize', echarsResize)
	})
}
