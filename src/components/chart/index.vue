<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-10 10:22:40
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-25 17:29:11
 * @FilePath: \Vue3-ts\src\components\barChart\index.vue
 * @Description: 
-->
<template>
	<div ref="echarsRef" class="tw-w-full tw-h-full"></div>
</template>

<script lang="ts" name="bar" setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { useEchars } from '@/hooks/useEchars'

const echarsRef = ref<HTMLElement>()

const initEchars = (options: echarts.EChartsOption) => {
	const myEchars: echarts.ECharts = echarts.init(echarsRef.value as HTMLElement)
	useEchars(myEchars, options)
	return myEchars
}

defineExpose({ initEchars })
</script>
