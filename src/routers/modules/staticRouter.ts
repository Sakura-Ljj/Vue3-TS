import { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config'

export const staticRouter: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: HOME_URL
	},
	{
		path: LOGIN_URL,
		name: 'login',
		component: () => import('@/page/login/index.vue'),
		children: []
	},
	{
		path: '/layout',
		name: 'layout',
		component: () => import('@/page/layouts/index.vue'),
		redirect: HOME_URL,
		children: []
	}
]
