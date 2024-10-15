<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-21 14:52:00
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-27 15:01:04
 * @FilePath: \Vue3-ts\src\page\layouts\components\subMenu.vue
 * @Description: 
-->
<template>
	<template v-for="item in menuList" :key="item.name">
		<el-sub-menu :index="item.path" v-if="item.children && item.children.length">
			<template #title>
				<el-icon><component :is="item.meta.icon"></component></el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<subMenu :menuList="item.children" />
		</el-sub-menu>
		<el-menu-item :index="item.path" v-else @click="handleNav(item)">
			<el-icon><component :is="item.meta.icon"></component></el-icon>
			<template #title>{{ item.meta.title }}</template>
		</el-menu-item>
	</template>
</template>

<script lang="ts" setup name="subMenu">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{ menuList: Menu.MenuOptions[] }>()

const handleNav = (item: Menu.MenuOptions) => {
	router.push(item.path)
}
</script>
