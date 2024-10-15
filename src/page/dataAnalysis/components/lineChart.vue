<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-09-13 16:10:53
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-09-13 16:11:16
 * @FilePath: \Vue3-ts\src\page\dataAnalysis\components\lineChart.vue
 * @Description: 
-->
<template>
	<chart ref="lineChartRef" />
</template>
<script lang="ts" name="lineChart" setup>
import chart from '@/components/chart/index.vue'
import { ref, onMounted } from 'vue'

const lineChartRef = ref()

const getRandomValues = (length: number) => {
	return Array.from(new Array(length).keys()).map(() => {
		return Math.floor(Math.random() * 100)
	})
}

const option = {
	tooltip: {
		trigger: 'axis', // 触发类型, axis为坐标轴触发 默认为none 可选为 'item'
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'line' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	xAxis: {
		data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	},
	yAxis: {},
	series: [
		{
			name: 'smoothLine',
			data: getRandomValues(7),
			type: 'line',
			smooth: true, // 设置为平滑曲线
			stack: 'x' // 设置哪些系列堆叠在一起
		},
		{
			// 基础折现
			name: 'baseLine',
			data: getRandomValues(7),
			type: 'line',
			stack: 'x' // 设置哪些系列堆叠在一起
		}
	]
}

onMounted(() => {
	lineChartRef.value.initEchars(option)
})
</script>
