/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-18 16:56:43
 * @LastEditors: Sakura 1430008132@qq.com
 * @LastEditTime: 2025-03-06 18:32:00
 * @FilePath: \Vue3-TS\src\routers\index.ts
 * @Description:
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import { staticRouter } from '@/routers/modules/staticRouter'
import { useAuthStore } from '@/stores/modules/auth'
import { initDynamicRouter } from '@/routers/modules/dynamicRouter'
import { useUserStore } from '@/stores/modules/user'
import { LOGIN_URL, USER_URL } from '@/config'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter],
	strict: false // 是否禁止尾部斜杠
})

// 路由拦截
router.beforeEach(async (to, from, next) => {
	// 鉴权
	const userStore = useUserStore()
	if (to.path === LOGIN_URL) {
		resetRouter()
		userStore.setToken('')
		return next()
	}
	if (!userStore.token) return next({ path: LOGIN_URL, replace: true })

	if (to.path === USER_URL && !userStore.token) return next({ path: LOGIN_URL, replace: true })

	console.log(userStore.userInfo)

	if (!userStore.userInfo.id && to.path !== USER_URL) {
		const userInfo = await userStore.getUserInfo()
		if (!userInfo.id) return next({ path: USER_URL, replace: true })
		userStore.setUserInfo(userInfo)
	}
	if (to.path === USER_URL) return next()

	// 检测有没有菜单列表, 没有则重新请求菜单列表并添加动态路由
	const authStore = useAuthStore()
	if (!authStore.authMenuListGet.length) {
		try {
			await initDynamicRouter()
		} catch (e: any) {
			userStore.setToken('')
		}
		return next({ ...to, replace: true })
	}

	next()
})

// 重置路由
export const resetRouter = () => {
	const authStore = useAuthStore()
	authStore.flatMenuListGet.forEach(({ name }) => {
		if (name && router.hasRoute(name)) {
			router.removeRoute(name)
		}
	})
}

export default router
