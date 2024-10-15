<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-09 16:26:03
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-09-12 17:13:46
 * @FilePath: \Vue3-ts\src\page\dataAnalysis\components\verticalBar.vue
 * @Description: 
-->
<template>
	<chart ref="barChartRef" />
</template>

<script lang="ts" name="verticalBar" setup>
import chart from '@/components/chart/index.vue'
import { ref, onMounted } from 'vue'

const barChartRef = ref()

const barData: { [key: string]: any } = {
	Mon: 2000,
	Tue: 1530,
	Wed: 4800,
	Thu: 9990,
	Fri: 390,
	Sat: 6560,
	Sun: 385
}
const weekMap: { [key: string]: any } = {
	Mon: '周一',
	Tue: '周二',
	Wed: '周三',
	Thu: '周四',
	Fri: '周五',
	Sat: '周六',
	Sun: '周日'
}
const keys = Object.keys(barData)
const xAxisData = keys.map(key => weekMap[key])
const data = keys.map(key => barData[key])

const options = {
	tooltip: {
		trigger: 'axis', // 触发类型, axis为坐标轴触发 默认为none 可选为 'item'
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	xAxis: {
		data: xAxisData
	},
	yAxis: {},
	series: [
		{
			type: 'bar',
			data
		}
	]
}

onMounted(() => {
	barChartRef.value.initEchars(options)
})
</script>
