/*
 * @Author: Sakura 1430008132@qq.com
 * @Date: 2025-02-24 17:23:52
 * @LastEditors: Sakura 1430008132@qq.com
 * @LastEditTime: 2025-02-25 18:54:04
 * @FilePath: \Vue3-TS\src\routers\modules\staticRouter.ts
 * @Description:
 */
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
	},
	{
		path: '/accountAdd/index',
		name: 'accountAdd',
		component: () => import('@/page/approval/account/accountAdd/index.vue'),
		children: []
	}
]
