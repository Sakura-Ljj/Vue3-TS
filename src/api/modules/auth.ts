// import { Auth } from './interface'
import axios from '../axios'

const getAuthMenuList = async () => {
	return axios.get('/auth/getMenuList')
}

export default { getAuthMenuList }
