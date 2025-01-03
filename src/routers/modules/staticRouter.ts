import { RouteRecordRaw } from 'vue-router'
import { HOME_URL } from '@/config'

export const staticRouter: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: HOME_URL
	},
	{
		path: '/layout',
		name: 'layout',
		component: () => import('@/page/layouts/index.vue'),
		redirect: HOME_URL,
		children: []
	}
]
