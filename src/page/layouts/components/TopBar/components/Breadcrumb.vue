<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-27 16:22:14
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-14 10:21:03
 * @FilePath: \Vue3-ts\src\page\layouts\components\TopBar\components\Breadcrumb.vue
 * @Description: 
-->
<template>
	<div>
		<el-breadcrumb separator-icon="ArrowRight">
			<el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.path }">
				<div class="tw-flex tw-items-center">
					<el-icon class="tw-mr-1">
						<component :is="item.meta.icon"></component>
					</el-icon>
					<span>{{ item.meta.title }}</span>
				</div>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { HOME_URL } from '@/config'

const authStore = useAuthStore()
const route = useRoute()

const breadcrumbList = computed(() => {
	const currPath = route.matched[route.matched.length - 1].path
	const breadcrumbData = authStore.breadcrumbListGet[currPath] || []

	if (breadcrumbData[0].meta.title !== route.meta.title)
		return [{ path: HOME_URL, meta: { icon: 'HomeFilled', title: '主页' } }, ...breadcrumbData]

	return breadcrumbData
})
</script>
