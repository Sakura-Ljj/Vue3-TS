/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-18 17:10:45
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-09-26 15:19:40
 * @FilePath: \Vue3-ts\src\config\index.ts
 * @Description:
 */

export const HOME_URL: string = '/home/index'

export const LOGIN_URL: string = '/login/index'

export const POSITION_MAP: { [key: string]: string } = {
	Boss: '老板',
	Manager: '经理',
	Custom: '客户',
	Business: '商务'
}

export const SEX_MAP: { [key: number]: string } = {
	0: '男',
	1: '女'
}

export const ACCOUNT_STATUS_MAP: { [key: number]: string } = {
	0: '禁用',
	1: '启用'
}
