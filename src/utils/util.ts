/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-19 15:28:51
 * @LastEditors: Sakura 1430008132@qq.com
 * @LastEditTime: 2025-02-26 16:48:17
 * @FilePath: \Vue3-TS\src\utils\util.ts
 * @Description:
 */

// 筛选出用于展示的菜单列表
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
	const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))

	return newMenuList.filter(item => {
		if (item.children?.length) item.children = getShowMenuList(item.children)
		return !item.meta.isHide
	})
}

// 获取拍平后的路由列表
export function getFlatMenuList(menuList: Menu.MenuOptions[]) {
	const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))

	return newMenuList.reduce((curr: Menu.MenuOptions[], item: Menu.MenuOptions) => {
		let flatArr = [...curr, item]
		if (item.children?.length) flatArr = [...flatArr, ...getFlatMenuList(item.children)]
		return flatArr
	}, [])
}

// 格式化出顶部面包屑栏
export function getAllbreadcrunvList(menuList: Menu.MenuOptions[], result: { [key: string]: any } = {}, parent = []) {
	menuList.forEach(item => {
		result[item.path] = [...parent, item]
		if (item.children?.length) getAllbreadcrunvList(item.children, result, result[item.path])
	})
	return result
}

export function formatUrl(url: string, params: { [key: string]: any }) {
	const formatParams: string[] = []
	Object.keys(params).forEach(key => {
		formatParams.push(`${key}=${params[key]}`)
	})
	return `${url}?${formatParams.join('&')}`
}

export function timeCallStr() {
	const hour: number = new Date().getHours()
	if (hour < 12) return '早上好'
	if (hour < 18) return '下午好'
	return '晚上好'
}
