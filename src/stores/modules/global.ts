/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-25 14:59:28
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-25 15:01:01
 * @FilePath: \Vue3-ts\src\stores\modules\global.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { globalState } from '@/stores/interface'

export const useGlobalStore = defineStore({
	id: 'sora-global',

	state: (): globalState => ({
		isCollapse: false
	}),

	actions: {
		setGlobalState(key: keyof globalState, val: any) {
			this[key] = val
		}
	}
})
