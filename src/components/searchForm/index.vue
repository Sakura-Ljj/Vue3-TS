<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-04 11:07:56
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-09 11:46:42
 * @FilePath: \Vue3-ts\src\components\searchForm\index.vue
 * @Description: 
-->
<template>
	<div class="tw-bg-white tw-rounded-sm tw-mb-2 tw-p-4">
		<el-form inline :model="formParam" class="demo-form-inline" ref="searchFormRef">
			<slot name="searchItem" :formState="formParam"></slot>
		</el-form>

		<div class="tw-text-right">
			<el-button type="primary" icon="Search" @click="search">搜索</el-button>
			<el-button icon="RefreshRight" @click="resetForm(searchFormRef)">重置</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'

interface FormParamProps {
	formParam: { [key: string]: any }
	search: () => void
	reset: () => void
}

const searchFormRef = ref<FormInstance>()

const props = withDefaults(defineProps<FormParamProps>(), {
	formParam: () => ({})
})

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
	props.reset()
}
</script>
