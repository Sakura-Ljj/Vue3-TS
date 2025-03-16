/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2025-01-13 18:54:19
 * @LastEditTime: 2025-03-06 16:48:53
 * @FilePath: \Vue3-TS\src\stores\modules\user.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { userState, userInfoParams } from '@/stores/interface'
import axios from '@/api/axios'
import { getUserInfoByToken } from '@/api/modules/user'

export const useUserStore = defineStore({
	id: 'sora-user',

	state: (): userState => ({
		token: '',
		userInfo: {
			id: ''
		}
	}),

	actions: {
		setToken(token: string) {
			this.token = token
			axios.defaults.headers.common['token'] = token
		},

		setUserInfo(userInfo: userInfoParams) {
			this.userInfo = userInfo
		},

		getUserInfo() {
			return getUserInfoByToken()
		}
	},
	// 数据持久化
	persist: {
		paths: ['token']
	}
})
