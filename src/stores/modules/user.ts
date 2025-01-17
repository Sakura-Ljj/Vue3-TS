/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2025-01-13 18:54:19
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2025-01-16 17:42:38
 * @FilePath: \Vue3-ts\src\stores\modules\user.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { userState } from '@/stores/interface'

export const useUserStore = defineStore({
	id: 'sora-user',

	state: (): userState => ({
		token: ''
	}),

	actions: {
		setToken(token: string) {
			this.token = token
		}
	}
})
