/*
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-19 14:58:41
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-08 17:52:02
 * @FilePath: \Vue3-ts\src\typings\global.d.ts
 * @Description:
 */
declare namespace Menu {
	interface MenuOptions {
		path: string
		name: string
		component?: string | (() => Promise<unknown>)
		redirect?: string
		meta: MetaProps
		children?: MenuOptions[]
	}
	interface MetaProps {
		isKeepAlive: boolean
		isHide: boolean
		title: string
		icon?: string
	}
}

declare namespace CommonTable {
	interface TableColumns {
		prop: string
		label?: string
		width?: string
		align?: string
		fixed?: string | boolean
		minWidth?: string
		useSlot?: boolean
	}
	interface PageProps {
		currentPage: number
		pageSize: number
	}
	interface PaginationProps extends PageProps {
		totals: number
	}
	interface TableStateProps {
		tableData: any[]
		paginationParams: PaginationProps
		searchState: { [key: string]: any }
	}
	interface PageableProps extends PageProps {
		pageSizes?: number[]
		layout?: string
	}
	interface SelectionParams {
		isShow: Boolean
		selectable?: (row: any) => boolean
	}
}
