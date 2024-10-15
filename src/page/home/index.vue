<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-21 10:55:31
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-02 11:49:49
 * @FilePath: \Vue3-ts\src\page\home\index.vue
 * @Description: 
-->
<template>
	<!-- Header -->
	<div class="tw-bg-white tw-mb-2 tw-rounded-sm">
		<div class="tw-py-5 border-bottom tw-pl-5">工作台</div>
		<div class="tw-flex tw-pl-2">
			<div class="tw-py-5 tw-flex tw-flex-1">
				<el-avatar :size="50" />
				<div class="tw-ml-5">
					<p class="tw-text-xl">下午好, Sora, 开始您一天的工作吧</p>
					<p class="tw-text-xs tw-text-gray-500">今日阴转大雨，17℃ - 28℃，出门记得带伞哦。</p>
				</div>
			</div>
			<div class="tw-flex-1 tw-flex tw-items-center tw-justify-between tw-pr-20">
				<div>
					<p>统计数</p>
					<p class="tw-font-semibold tw-text-gray-600">1000</p>
				</div>
				<div>
					<p>待办</p>
					<p class="tw-font-semibold tw-text-gray-600">3/12</p>
				</div>
				<div>
					<p>消息</p>
					<p class="tw-font-semibold tw-text-gray-600">10086</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Main -->
	<div class="tw-flex tw-items-start">
		<!-- Left -->
		<div class="tw-flex-1 tw-mr-2">
			<!-- 卡片列表 -->
			<div class="tw-rounded-sm tw-bg-white tw-mb-2">
				<div class="tw-py-5 border-bottom tw-pl-5">卡片列表</div>
				<div class="tw-grid tw-grid-cols-3">
					<div class="tw-text-sm tw-p-5 grid-border" v-for="item in cardList" :key="item.title">
						<div class="tw-flex tw-items-center tw-mb-2">
							<SvgIcon :style="{ width: '30px', height: '30px' }" :name="item.icon" />
							<span class="tw-ml-2">{{ item.title }}</span>
						</div>
						<p class="tw-mb-2">{{ item.desc }}</p>
						<p class="tw-text-xs tw-text-gray-500">{{ item.author }}</p>
					</div>
				</div>
			</div>
			<!-- 通知或资讯 -->
			<div class="tw-rounded-sm tw-bg-white">
				<div class="tw-py-5 border-bottom tw-pl-5">通知或咨询</div>
				<div class="tw-flex tw-py-3 tw-mx-3 border-bottom" v-for="item in noticeList" :key="item.title">
					<el-avatar :size="40" class="tw-mr-4" />
					<div>
						<p class="tw-mb-2 tw-text-sm notice-title">{{ item.title }}</p>
						<p class="tw-text-xs tw-text-gray-500">{{ item.date }}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Right -->
		<div class="tw-flex-1">
			<!-- 操作列表-->
			<div class="tw-bg-white tw-rounded-sm tw-mb-2">
				<div class="tw-py-5 border-bottom tw-pl-5">快捷操作</div>
				<div class="tw-grid tw-grid-cols-3">
					<div
						class="tw-flex tw-flex-col tw-items-center tw-p-4 grid-border tw-cursor-pointer"
						v-for="item in hotCtrlList"
						:key="item.title"
						@click="item.onClick"
					>
						<el-icon :color="item.color" :size="30"><component :is="item.icon"></component></el-icon>
						<div class="tw-text-sm tw-mt-2">{{ item.title }}</div>
					</div>
				</div>
			</div>
			<!-- 首页图表展示 -->
			<div class="tw-bg-white tw-rounded-sm">
				<div class="tw-py-5 border-bottom tw-pl-5">首页图表展示</div>
				<div class="tw-h-96">
					<Pie ref="pieRef" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pie from './components/pie.vue'
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { ref, onMounted } from 'vue'

interface CardItem {
	title: string
	desc: string
	icon: string
	author: string
}

interface HotCtrlItem {
	title: string
	color?: string
	icon: string
	onClick: () => void
}

interface NoticeItem {
	title: string
	avatar?: string
	date: string
}

const router = useRouter()

const cardList: CardItem[] = [
	{
		title: 'GitHub',
		desc: '是一个面向开源及私有软件项目的托管平台',
		icon: 'github',
		author: '开源君 2021-07-04'
	},
	{
		title: 'Vue',
		desc: '易学易用, 性能出色, 适用场景丰富的 Web 前端框架',
		icon: 'vue',
		author: '尤于溪 2021-07-04'
	},
	{
		title: 'TypeScript',
		desc: 'TypeScript is JavaScript with syntax for types',
		icon: 'typescript',
		author: 'Boston 2021-07-04'
	},
	{
		title: 'Vite',
		desc: '下一代的前端工具链, 为开发提供极速响应',
		icon: 'vite',
		author: '开源君 2021-07-04'
	},
	{
		title: 'Tailwindcss',
		desc: '只需书写 HTML 代码，无需书写 CSS, 即可快速构建美观的网站',
		icon: 'tailwindcss',
		author: '开源君 2021-07-04'
	},
	{
		title: 'Eslint',
		desc: 'Find and fix problems in your JavaScript code',
		icon: 'eslint',
		author: 'Francesco Trotta 2021-07-04'
	}
]

const hotCtrlList: HotCtrlItem[] = [
	{
		title: '工作台',
		icon: 'HomeFilled',
		color: '#A87C7C',
		onClick: () => {
			router.push(HOME_URL)
		}
	},
	{
		title: '权限管理',
		icon: 'Lock',
		color: '#4B70F5',
		onClick: () => {
			router.push('/role/userRole')
		}
	},
	{
		title: '数据分析',
		icon: 'Histogram',
		color: '#03C988',
		onClick: () => {
			router.push('/dataAnalysis/index')
		}
	},
	{
		title: '审批列表',
		icon: 'List',
		color: '#C147E9',
		onClick: () => {
			router.push('/approval/order')
		}
	},
	{
		title: '消息',
		icon: 'Message',
		color: '#46C2CB',
		onClick: () => {
			router.push('/message/index')
		}
	},
	{
		title: '关于项目',
		icon: 'Reading',
		color: '#B85C38',
		onClick: () => {
			router.push('/about/index')
		}
	}
]

const noticeList: NoticeItem[] = [
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	},
	{
		title: '发布通用管理项目模板脚手架1.0版本',
		date: '2024-07-01 14:47:00'
	}
]

const pieRef = ref()
const pieData = [
	{
		name: '未完成订单',
		value: 256
	},
	{
		name: '未付款订单',
		value: 1500
	},
	{
		name: '未结算订单',
		value: 512
	}
]
onMounted(() => {
	pieRef.value.initEchars(pieData)
})
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
