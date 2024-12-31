/*
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-16 14:32:07
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-31 09:59:54
 * @FilePath: \Vue3-ts\src\hooks\useCommonTable.ts
 * @Description:
 */
import { reactive, toRefs } from 'vue'
export const useCommonTable = (
	paginationParams: {
		currentPage?: number
		pageSize?: number
	} = {},
	api?: (params: any) => Promise<any>,
	searchParam: { [key: string]: any } = {}
) => {
	const state = reactive<CommonTable.TableStateProps>({
		tableData: [],
		paginationParams: {
			// 当前页数
			currentPage: paginationParams.currentPage ?? 1,
			// 当页条数
			pageSize: paginationParams.pageSize ?? 100,
			// 总条数
			totals: 0
		},
		searchState: searchParam
	})

	const getTableList = async () => {
		if (!api) return
		const offset = (state.paginationParams.currentPage - 1) * state.paginationParams.pageSize
		// const limit = state.paginationParams.pageSize
		const sliceLimit = state.paginationParams.currentPage * state.paginationParams.pageSize
		// 接入api获取表格数据
		const { list, totals } = await api({ offset, limit: sliceLimit, ...searchParam })

		state.tableData = list
		state.paginationParams.totals = totals
	}

	const handlerChange = (currentPage: number, pageSize: number) => {
		state.paginationParams.currentPage = currentPage
		state.paginationParams.pageSize = pageSize

		getTableList()
	}

	const search = () => {
		state.paginationParams.currentPage = 1
		getTableList()
	}

	const reset = () => {
		state.paginationParams.currentPage = 1
		getTableList()
	}

	return {
		...toRefs(state),
		getTableList,
		handlerChange,
		search,
		reset
	}
}
