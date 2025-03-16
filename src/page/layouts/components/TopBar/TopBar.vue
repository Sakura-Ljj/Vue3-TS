<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-25 11:46:48
 * @LastEditors: Sakura 1430008132@qq.com
 * @LastEditTime: 2025-02-26 16:16:53
 * @FilePath: \Vue3-TS\src\page\layouts\components\TopBar\TopBar.vue
 * @Description: 
-->
<template>
	<div class="tw-py-4 tw-px-3 border-bottom tw-flex tw-items-center tw-justify-between">
		<CollapseIcon />
		<Breadcrumb class="tw-ml-3" />
		<ToolBar />
	</div>
</template>

<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import ToolBar from './components/ToolBar.vue'
</script>
