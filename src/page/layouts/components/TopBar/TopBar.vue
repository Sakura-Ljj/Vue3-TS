<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-25 11:46:48
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-27 17:41:30
 * @FilePath: \Vue3-ts\src\page\layouts\components\TopBar\TopBar.vue
 * @Description: 
-->
<template>
	<div class="tw-py-4 tw-px-3 border-bottom tw-flex tw-items-center">
		<CollapseIcon />
		<Breadcrumb class="tw-ml-3" />
	</div>
</template>

<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>
