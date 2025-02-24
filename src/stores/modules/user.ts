/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2025-01-13 18:54:19
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-24 18:24:48
 * @FilePath: \Vue3-TS\src\stores\modules\user.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { userState } from '@/stores/interface'
import axios from '@/api/axios'

export const useUserStore = defineStore({
	id: 'sora-user',

	state: (): userState => ({
		token: ''
	}),

	actions: {
		setToken(token: string) {
			this.token = token
			axios.defaults.headers.common['token'] = token
		}
	}
})
