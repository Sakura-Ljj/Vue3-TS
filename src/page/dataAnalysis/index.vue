<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-09 16:04:45
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-10 10:09:10
 * @FilePath: \Vue3-ts\src\page\dataAnalysis\index.vue
 * @Description: 
-->
<template>
	<div>
		<div class="tw-flex tw-mb-2">
			<div class="tw-flex-1 tw-bg-white tw-mr-2 grid-border">
				<div class="tw-py-5 border-bottom tw-pl-5">柱状图示例</div>
				<div class="box-height">
					<verticalBar />
				</div>
			</div>
			<div class="tw-flex-1 tw-bg-white grid-border">
				<div class="tw-py-5 border-bottom tw-pl-5">折线图示例</div>
				<div class="box-height">
					<lineChart />
				</div>
			</div>
		</div>
		<div class="tw-flex">
			<div class="tw-flex-1 tw-bg-white tw-mr-2 grid-border">
				<div class="tw-py-5 border-bottom tw-pl-5">动画图轮播示例</div>
				<div class="box-height">
					<horizontalBar />
				</div>
			</div>
			<div class="tw-flex-1 tw-bg-white grid-border">
				<div class="tw-py-5 border-bottom tw-pl-5">散点图示例</div>
				<div class="box-height">
					<scatterChart />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import verticalBar from './components/verticalBar.vue'
import horizontalBar from './components/horizontalBar.vue'
import lineChart from './components/lineChart.vue'
import scatterChart from './components/scatterChart.vue'
</script>

<style lang="less" scoped>
.box-height {
	height: 396px;
}
</style>
