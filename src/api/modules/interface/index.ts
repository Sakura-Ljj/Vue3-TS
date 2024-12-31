/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-09-27 15:48:59
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-26 17:30:21
 * @FilePath: \Vue3-ts\src\api\modules\interface\index.ts
 * @Description:
 */
export namespace User {
	export interface ReqUserParams {
		offset?: number
		limit?: number
		username?: string
		role?: string
		status?: number | string
		createTime?: string
	}

	export interface UserItem {
		id: string
		username: string
		role: string
		sex: number
		age: number
		idNumber: string
		email: string
		status: number
		changeTime: string
		createTime: string
		delVisible?: boolean
	}

	export interface AddUserParams {
		username: string
		role: string
		sex: number
		age: number
		idNumber: string
		email: string
		status: boolean
	}

	export interface EditUserParams {
		id: string
		username?: string
		role?: string
		sex?: number
		age?: number
		idNumber?: string
		email?: string
		status?: boolean
	}
}

export namespace Auth {}
