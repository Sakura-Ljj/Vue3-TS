<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-18 17:42:37
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-08 16:13:55
 * @FilePath: \Vue3-ts\src\page\layouts\index.vue
 * @Description: 
-->
<template>
	<div class="tw-flex tw-h-full">
		<el-menu
			:default-active="menuActive"
			:collapse="isCollapse"
			background-color="#001529"
			text-color="#fff"
			class="tw-h-full tw-w-52"
		>
			<!-- LOGO -->
			<div class="tw-flex tw-items-center tw-justify-center tw-py-4 tw-px-5">
				<img src="@/assets/svg/vue.svg" alt="logo" />
				<!-- 这里使用opacity来控制显隐, 不然折叠动画会有阻塞感-->
				<span
					:class="[
						'tw-text-xl',
						'tw-text-white',
						'tw-whitespace-nowrap',
						'tw-ml-3',
						'tw-overflow-hidden',
						!isCollapse ? 'tw-opacity-100' : 'tw-opacity-0'
					]"
					v-show="!isCollapse"
				>
					Vue3 + Vite
				</span>
			</div>
			<!-- 菜单栏 -->
			<SubMenu :menuList="menuList" />
		</el-menu>
		<!-- <div class="tw-flex-1 tw-flex tw-flex-col"> -->
		<div class="tw-flex tw-flex-col container-right">
			<TopBar />
			<Main />
		</div>
	</div>
</template>

<script setup lang="ts" name="layout">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { useGlobalStore } from '@/stores/modules/global'
import { useRoute } from 'vue-router'
import SubMenu from './components/SubMenu.vue'
import TopBar from './components/TopBar/TopBar.vue'
import Main from './components/main/Main.vue'

const authStore = useAuthStore()
const globalStore = useGlobalStore()
const route = useRoute()

const menuList = computed(() => authStore.showMenuListGet)
const isCollapse = computed(() => globalStore.isCollapse)
const menuActive = computed(() => route.path)
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
