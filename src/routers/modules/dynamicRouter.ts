/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-21 11:03:51
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-24 11:24:53
 * @FilePath: \Vue3-ts\src\routers\modules\dynamicRouter.ts
 * @Description:
 */
import { useAuthStore } from '@/stores/modules/auth'
import router from '@/routers'

const module = import.meta.glob('@/page/**/*.vue')

export const initDyamicRouter = () => {
	const authStore = useAuthStore()

	authStore.getAuthMenuList()

	if (!authStore.authMenuListGet.length) {
		// 没有菜单列表则跳转回登录页
	}

	authStore.flatMenuListGet.forEach((item: any) => {
		item.children && delete item.children
		item.component = module[`/src/page${item.component}.vue`]

		router.addRoute('layout', item)
	})
}
