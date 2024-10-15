<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-27 16:19:42
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-27 16:21:58
 * @FilePath: \Vue3-ts\src\page\layouts\components\TopBar\components\CollapseIcon.vue
 * @Description: 
-->
<template>
	<el-icon :size="30" color="#4B5563" @click="collapse" class="tw-cursor-pointer">
		<component :is="globalStore.isCollapse ? 'Expand' : 'Fold'"></component>
	</el-icon>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()

const collapse = () => {
	globalStore.setGlobalState('isCollapse', !globalStore.isCollapse)
}
</script>
