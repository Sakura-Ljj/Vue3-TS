<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-16 14:32:07
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-09-12 15:43:39
 * @FilePath: \Vue3-ts\src\page\dataAnalysis\components\horizontalBar.vue
 * @Description: 
-->
<template>
	<chart ref="barChartRef" />
</template>

<script lang="ts" name="horizontalBar" setup>
import chart from '@/components/chart/index.vue'
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const barChartRef = ref()

const yAxisData = (() => {
	return Array.from(new Array(7).keys())
		.map(item => {
			const now = new Date()
			return new Date(+now - 2000 * item).toLocaleTimeString().replace(/^\D*/, '')
		})
		.reverse()
})()

const data = (() => {
	return Array.from(new Array(7).keys()).map(() => {
		return Math.floor(Math.random() * 1000)
	})
})()

const options = {
	tooltip: {
		trigger: 'axis', // 触发类型, axis为坐标轴触发 默认为none 可选为 'item'
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	xAxis: {
		show: false // 隐藏坐标轴
	},
	yAxis: {
		data: yAxisData,
		splitLine: false, // 隐藏坐标轴分隔线
		axisTick: false // 隐藏坐标轴刻度线
	},
	series: [
		{
			type: 'bar',
			data
		}
	]
}

onMounted(() => {
	const myEchars: echarts.ECharts = barChartRef.value.initEchars(options)

	myEchars.setOption(options)

	setInterval(() => {
		roundData(myEchars)
	}, 2000)
})
// Remark: 这里如果 set 的数据是之前删除前存在的使用的过渡动画是滑动, 如果 set 的数据是删除前没有的数据使用的过渡动画是显隐切换
const roundData = (myEchars: echarts.ECharts) => {
	yAxisData.shift()
	data.shift()
	yAxisData.push(new Date().toLocaleTimeString().replace(/^\D*/, ''))
	data.push(Math.floor(Math.random() * 1000))

	myEchars.setOption({
		yAxis: { data: yAxisData },
		series: [{ data }]
	})
}
</script>
