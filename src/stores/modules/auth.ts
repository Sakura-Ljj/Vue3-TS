/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-19 11:47:06
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2025-01-16 17:40:00
 * @FilePath: \Vue3-ts\src\stores\modules\auth.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { authState } from '@/stores/interface'
import { getShowMenuList, getFlatMenuList, getAllbreadcrunvList } from '@/utils/util'
import authRoutes from '@/api/modules/auth'

export const useAuthStore = defineStore({
	id: 'sora-auth',

	state: (): authState => ({
		authMenuList: []
	}),

	getters: {
		flatMenuListGet: state => getFlatMenuList(state.authMenuList),
		showMenuListGet: state => getShowMenuList(state.authMenuList),
		authMenuListGet: state => state.authMenuList,
		breadcrumbListGet: state => getAllbreadcrunvList(state.authMenuList)
	},

	actions: {
		async getAuthMenuList() {
			const { data } = await authRoutes.getAuthMenuList()
			this.authMenuList = data
		}
	}
})
