/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-12-10 14:51:52
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-10 14:52:01
 * @FilePath: \Vue3-ts\src\api\modules\file.ts
 * @Description:
 */
import axios from '../axios'

const getMarkdownFile = () => {
	return axios.get('/file/getMarkdown')
}

export default { getMarkdownFile }
