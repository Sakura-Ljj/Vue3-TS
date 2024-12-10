/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-21 11:03:51
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-10 11:26:57
 * @FilePath: \Vue3-ts\src\routers\modules\dynamicRouter.ts
 * @Description:
 */
import { useAuthStore } from '@/stores/modules/auth'
import router from '@/routers'

const module = import.meta.glob('@/page/**/*.vue')

export const initDyamicRouter = async () => {
	const authStore = useAuthStore()

	await authStore.getAuthMenuList()

	if (!authStore.authMenuListGet.length) {
		// 没有菜单列表则跳转回登录页
		return
	}

	authStore.flatMenuListGet.forEach((item: any) => {
		item.children && delete item.children
		item.component = module[`/src/page${item.component}.vue`]

		router.addRoute('layout', item)
	})
}
