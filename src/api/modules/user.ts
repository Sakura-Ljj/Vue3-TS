import { User } from './interface'
import axios from '../axios'
import { formatUrl } from '@/utils/util'

export const getUserList = async (params: User.ReqUserParams) => {
	return axios.get(formatUrl('/user/list', params)).then(res => res.data)
}

export const addUser = (params: User.AddUserParams) => {
	return axios.post(`/user/add`, params)
}

export const editUser = (params: User.EditUserParams) => {
	return axios.post(`/user/edit`, params)
}

export const delUser = (params: string[]) => {
	return axios.post(`/user/del`, params)
}

export const getUserInfoByToken = (): Promise<User.UserItem> => {
	return axios.get('/user/infoByToken').then(res => res.data)
}
