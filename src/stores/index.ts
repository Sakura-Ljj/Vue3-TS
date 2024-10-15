/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-19 11:44:40
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-21 16:17:10
 * @FilePath: \Vue3-ts\src\stores\index.ts
 * @Description:
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 持久化store
pinia.use(piniaPluginPersistedstate)

export default pinia
