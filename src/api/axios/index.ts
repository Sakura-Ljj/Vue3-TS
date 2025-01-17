/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-12-09 16:28:24
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2025-01-17 11:05:49
 * @FilePath: \Vue3-ts\src\api\axios\index.ts
 * @Description:
 */
import axios, { Axios } from 'axios'
import { useUserStore } from '@/stores/modules/user'
import { useRouter } from 'vue-router'
import { LOGIN_URL } from '@/config'

const instance: Axios = axios.create({
	baseURL: '/api', // 这里直接配置服务器请求地址(http://localhose:3000)代表直接请求, 会产生跨域问题
	headers: {}, // 添加自定义请求头
	withCredentials: true
})

// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		const userStore = useUserStore()
		config.headers.set('token', userStore.token)
		return config
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	({ data, config, headers, request }) => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		const resultConfig = {
			config,
			headers,
			request
		}
		if (data.code !== 200) {
			ElMessage.error(data?.msg || '服务错误, 请稍后重试')
			return Promise.reject(data || '服务错误, 请稍后重试')
		}
		// token失效或没有登录凭证
		if (data.code === 401) {
			const userStore = useUserStore()
			const router = useRouter()
			userStore.setToken('')
			router.replace(LOGIN_URL)
			ElMessage.error(data.msg)
			return Promise.reject(data)
		}
		return {
			resultConfig,
			...data
		}
	},
	error => {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		ElMessage.error('服务错误, 请稍后重试')
		return Promise.reject(error)
	}
)

export default instance
