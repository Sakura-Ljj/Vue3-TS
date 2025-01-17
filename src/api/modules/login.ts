import axios from '../axios'
import { formatUrl } from '@/utils/util'
import { Login } from './interface'

export const loginServer = async (params: Login.LoginServerParams) => {
	return axios.get(formatUrl('/auth/login', params)).then(res => res.data)
}

export const registerServer = async (params: Login.LoginServerParams) => {
	return axios.get(formatUrl('/auth/register', params)).then(res => res.data)
}
