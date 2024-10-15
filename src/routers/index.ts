/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-18 16:56:43
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-25 11:00:33
 * @FilePath: \Vue3-ts\src\routers\index.ts
 * @Description:
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import { staticRouter } from '@/routers/modules/staticRouter'
import { useAuthStore } from '@/stores/modules/auth'
import { initDyamicRouter } from '@/routers/modules/dynamicRouter'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter],
	strict: false // 是否禁止尾部斜杠
})

router.beforeEach((to, from, next) => {
	const userStore = useAuthStore()

	// 鉴权

	// 检测有没有菜单列表, 没有则重新请求菜单列表并添加动态路由
	if (!userStore.authMenuListGet.length) {
		initDyamicRouter()
		return next({ ...to, replace: true })
	}

	next()
})

export default router
