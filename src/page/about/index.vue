<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-10-14 17:16:53
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-10 16:09:56
 * @FilePath: \Vue3-ts\src\page\about\index.vue
 * @Description: 
-->
<template>
	<div>
		<div class="card">
			<div class="tw-text-lg tw-font-bold tw-mb-2">项目简介</div>
			<div>
				本项目是一个练习项目, 本项目基于Vue3、Vite、TS、Pinia、Element Plus开发, 接入了Echart图表工具,
				使用了Eslint+Prettier来规范代码, 内部封装了一些自定义hooks以及基于Element Plus组件封装了一些常用的UI组件
			</div>
		</div>
		<div class="card">
			<div class="tw-text-lg tw-font-bold tw-mb-2">node端</div>
			<div v-html="markdownContent" />
		</div>
	</div>
</template>

<script setup lang="ts">
import fileRoutes from '@/api/modules/file'
import { onMounted } from 'vue'
import { marked } from 'marked'

let markdownContent = ref('')
onMounted(async () => {
	const { data } = await fileRoutes.getMarkdownFile()
	markdownContent.value = await marked(data)
})
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
