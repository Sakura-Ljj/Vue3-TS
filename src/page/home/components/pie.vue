<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-01 16:58:20
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-02 11:47:44
 * @FilePath: \Vue3-ts\src\page\home\components\pie.vue
 * @Description: 
-->
<template>
	<div ref="echarsRef" class="tw-w-full tw-h-full"></div>
</template>

<script lang="ts" name="pie" setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { useEchars } from '@/hooks/useEchars'

const echarsRef = ref<HTMLElement>()

const initEchars = (data: any) => {
	const myEchars: echarts.ECharts = echarts.init(echarsRef.value as HTMLElement)
	const options: echarts.EChartsOption = {
		title: {
			text: '圆环图的例子',
			left: 'center',
			top: 'center'
		},

		// 图例配置
		legend: {
			top: '4%',
			left: '2%',
			orient: 'vertical', // 图例排列方式
			icon: 'circle', //图例形状
			align: 'left', // 图例文字对齐方式
			itemGap: 20, // 图例文字行高
			// 图例文字样式
			textStyle: {
				fontSize: 13,
				color: '#a1a1a1',
				fontWeight: 500
			}
		},

		series: [
			{
				type: 'pie',
				data,
				radius: ['40%', '70%']
			}
		]
	}

	useEchars(myEchars, options)
}

defineExpose({ initEchars })
</script>
