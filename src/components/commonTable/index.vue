<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-04 16:12:15
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-09 10:59:50
 * @FilePath: \Vue3-ts\src\components\commontable\index.vue
 * @Description: 
-->
<template>
	<div class="tw-h-full">
		<!-- 搜索栏 -->
		<SearchForm v-show="showSearch" :formParam="searchState" :search="search" :reset="reset">
			<template #searchItem="{ formState }">
				<slot name="searchForm" :formState="formState"> </slot>
			</template>
		</SearchForm>
		<div class="tw-p-4 tw-bg-white">
			<!-- 头部按钮组 -->
			<div class="tw-mb-3 tw-flex tw-justify-between">
				<!-- left -->
				<div>
					<slot name="tableHeader" />
				</div>
				<!-- right -->
				<div class="tw-mr-5">
					<slot name="toolButton">
						<el-button icon="Refresh" circle @click="getTableList" />
						<el-button icon="Search" circle @click="showSearch = !showSearch" />
					</slot>
				</div>
			</div>
			<!-- 表格主体 -->
			<el-table
				:data="data ?? tableData"
				:border="border"
				:height="height"
				class="tw-mb-5"
				@selection-change="handleSelectionChange"
			>
				<template #empty>
					<slot name="empty"><el-empty description="no Data" /></slot>
				</template>
				<el-table-column v-if="selectionParam?.isShow" type="selection" :selectable="selectionParam.selectable" width="55" />
				<el-table-column
					v-for="item in tableColumns"
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:key="item.prop"
					:min-width="item.minWidth"
					:fixed="item.fixed"
				>
					<template #default="{ row, column }">
						<slot name="bodyCell" :row="row" :column="column">{{ row[item.prop] }}</slot>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页器 -->
			<el-pagination
				v-model:current-page="paginationParams.currentPage"
				v-model:page-size="paginationParams.pageSize"
				:page-sizes="pageable?.pageSizes"
				background
				:layout="pageable?.layout"
				:total="paginationParams.totals"
				@change="handlerChange"
				class="tw-justify-end"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCommonTable } from '@/hooks/useCommonTable'
import { onMounted, ref } from 'vue'
import SearchForm from '@/components/searchForm/index.vue'

interface CommonTableProps {
	tableColumns: CommonTable.TableColumns[]
	border?: boolean
	height?: string
	data?: any[]
	ruqeustApi?: (params: any) => Promise<any>
	pageable?: CommonTable.PageableProps
	searchParam?: { [key: string]: any }
	selectionParam?: CommonTable.SelectionParams
}

const props = defineProps<CommonTableProps>()

const { paginationParams, tableData, getTableList, handlerChange, searchState, search, reset } = useCommonTable(
	{ currentPage: props.pageable?.currentPage, pageSize: props.pageable?.pageSize },
	props.ruqeustApi,
	props.searchParam
)

const showSearch = ref(false)
const multipleSelection = ref([])

const handleSelectionChange = (row: any) => {
	multipleSelection.value = row
}

onMounted(() => {
	getTableList()
})

defineExpose({
	reset,
	multipleSelection
})
</script>
