<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-09-13 16:10:53
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-09-13 16:11:01
 * @FilePath: \Vue3-ts\src\page\dataAnalysis\components\scatterChart.vue
 * @Description: 
-->
<template>
	<chart ref="scatterChartRef" />
</template>

<script lang="ts" setup>
import chart from '@/components/chart/index.vue'
import { ref, onMounted } from 'vue'

const scatterChartRef = ref()

const option = {
	xAxis: {},
	yAxis: {},
	series: [
		{
			type: 'scatter',
			data: [
				[10, 5],
				[0, 8],
				[6, 10],
				[2, 12],
				[8, 9]
			]
		}
	]
}

onMounted(() => {
	scatterChartRef.value.initEchars(option)
})
</script>
