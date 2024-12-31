<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-07-16 14:32:17
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-12-31 16:00:48
 * @FilePath: \Vue3-ts\src\page\role\userRole\index.vue
 * @Description: 
-->
<template>
	<CommonTable
		:table-columns="tableColumns"
		border
		height="920"
		:ruqeust-api="getTableListApi"
		:pageable="pageable"
		:search-param="searchParam"
		:selection-param="{ isShow: true }"
		ref="commonTableRef"
	>
		<template #searchForm="{ formState }">
			<el-form-item label="姓名" prop="username">
				<el-input v-model="formState.username" class="input-width" placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item label="职位" porp="role">
				<el-select v-model="formState.role" placeholder="请选择用户职位" class="input-width" clearable>
					<el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="账号状态" prop="status">
				<el-select v-model="formState.status" placeholder="请选择账号状态" class="input-width" clearable>
					<el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="创建日期" prop="createTime">
				<el-date-picker v-model="formState.createTime" class="input-width" type="date" placeholder="请选择创建日期" />
			</el-form-item>
		</template>
		<template #tableHeader>
			<el-button type="primary" icon="CirclePlus" @click="showAddUserDialog">新建用户</el-button>
			<el-button type="primary" icon="Delete" @click="batchDel">批量删除</el-button>
			<el-button type="primary" icon="Download">导出用户数据</el-button>
		</template>

		<template #bodyCell="{ row, column }">
			<div v-if="column.property === 'role'">
				{{ POSITION_MAP[row.role] }}
			</div>
			<div v-if="column.property === 'sex'">
				{{ SEX_MAP[row.sex] }}
			</div>
			<div v-if="column.property === 'status'">
				{{ ACCOUNT_STATUS_MAP[row.status] }}
			</div>
			<div v-if="column.property === 'operate'">
				<el-button type="primary" link icon="View"> 查看 </el-button>
				<el-button type="primary" link icon="Edit" @click="showEditUserDialog(row)"> 编辑 </el-button>
				<el-button type="primary" link icon="Refresh"> 重置密码 </el-button>
				<el-popover trigger="click" :visible="row.delVisible">
					<template #reference>
						<el-button type="danger" link icon="Delete" @click="row.delVisible = true"> 删除 </el-button>
					</template>
					<div class="tw-mb-2">确认删除?</div>
					<div class="tw-flex">
						<el-button type="primary" size="small" @click="delUserById(row)"> 确认 </el-button>
						<el-button size="small" @click="row.delVisible = false"> 取消 </el-button>
					</div>
				</el-popover>
			</div>
		</template>
	</CommonTable>

	<el-dialog v-model="dialogFormVisible" title="新增用户" width="500" @closed="dialogClosed">
		<el-form :model="userForm" label-width="auto" ref="formRef">
			<el-form-item label="姓名" prop="username">
				<el-input v-model="userForm.username" autocomplete="off" placeholder="请填写姓名" />
			</el-form-item>
			<el-form-item label="职务" prop="role">
				<el-select v-model="userForm.role" placeholder="请选择职务">
					<el-option :label="item.label" :value="item.value" v-for="item in roleOptions" :key="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-radio-group v-model="userForm.sex">
					<el-radio :value="item.value" v-for="item in sexOptions" :key="item.value">{{ item.label }}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input-number v-model="userForm.age" :min="1" controls-position="right" />
			</el-form-item>
			<el-form-item label="身份证号" prop="idNumber">
				<el-input v-model="userForm.idNumber" autocomplete="off" placeholder="请填写身份证号" />
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="userForm.email" autocomplete="off" placeholder="请填写邮箱" />
			</el-form-item>
			<el-form-item label="账号状态" prop="status">
				<el-switch v-model="userForm.status" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="submit">确认</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { POSITION_MAP, SEX_MAP, ACCOUNT_STATUS_MAP } from '@/config'
import CommonTable from '@/components/commonTable/index.vue'
import { getUserList, addUser, delUser, editUser } from '@/api/modules/user'
import { ref } from 'vue'
import { User } from '@/api/modules/interface'
import { FormInstance } from 'element-plus'

const dialogFormVisible = ref(false)
const commonTableRef = ref()
const formRef = ref<FormInstance>()
const editId = ref('')

const userForm = reactive<User.AddUserParams>({
	username: '',
	role: '',
	sex: 0,
	age: 1,
	idNumber: '',
	email: '',
	status: true
})

const tableColumns: CommonTable.TableColumns[] = [
	{
		prop: 'id',
		label: 'id',
		width: '200'
	},
	{
		prop: 'username',
		label: '用户姓名',
		width: '200'
	},
	{
		prop: 'role',
		label: '职位',
		width: '150'
	},
	{
		prop: 'sex',
		label: '性别',
		width: '80'
	},
	{
		prop: 'age',
		label: '年龄',
		width: '80'
	},
	{
		prop: 'idNumber',
		label: '身份证号',
		width: '200'
	},
	{
		prop: 'email',
		label: '邮箱',
		width: '200'
	},
	{
		prop: 'status',
		label: '账号状态',
		width: '100'
	},
	{
		prop: 'createTime',
		label: '创建时间',
		width: '180'
	},
	{
		prop: 'changeTime',
		label: '修改时间',
		width: '180'
	},
	{
		prop: 'operate',
		label: '操作',
		minWidth: '320',
		fixed: 'right'
	}
]

const roleOptions = [
	{
		label: '老板',
		value: 'Boss'
	},
	{
		label: '经理',
		value: 'Manager'
	},
	{
		label: '客户',
		value: 'Custom'
	},
	{
		label: '商务',
		value: 'Business'
	}
]

const statusOptions = [
	{
		label: '禁用',
		value: 0
	},
	{
		label: '启用',
		value: 1
	}
]

const sexOptions = [
	{
		label: '男',
		value: 0
	},
	{
		label: '女',
		value: 1
	}
]

const searchParam: User.ReqUserParams = {
	username: '',
	role: '',
	status: '',
	createTime: ''
}

const getTableListApi = (params: User.ReqUserParams) => {
	return getUserList(params)
}

const pageable: CommonTable.PageableProps = {
	pageSizes: [10, 20, 30, 40],
	layout: 'total, prev, pager, next, sizes, jumper',
	currentPage: 1,
	pageSize: 20
}

const dialogClosed = () => {
	Object.assign(userForm, {
		username: '',
		role: '',
		sex: 0,
		age: 1,
		idNumber: '',
		email: '',
		status: true
	})
}

const submit = async () => {
	if (editId.value) {
		const updateInfo: User.EditUserParams = {
			id: editId.value,
			...userForm
		}
		await editUser(updateInfo)
		ElMessage.success('修改成功')
	} else {
		await addUser(userForm)
		ElMessage.success('添加成功')
	}
	commonTableRef.value.reset()
	dialogFormVisible.value = false
}

const showAddUserDialog = () => {
	editId.value = ''
	dialogFormVisible.value = true
}

const showEditUserDialog = async (item: User.UserItem) => {
	dialogFormVisible.value = true
	Object.assign(userForm, { ...item, status: !!item.status })
	editId.value = item.id
}

const delUserById = async (item: User.UserItem) => {
	await delUser([item.id])
	commonTableRef.value.reset()
	item.delVisible = false
	ElMessage.success('删除成功')
}

const batchDel = () => {
	if (!commonTableRef.value.multipleSelection.length) {
		ElMessage.warning('请至少选择一条数据')
		return
	}

	const ids = commonTableRef.value.multipleSelection.map((item: User.UserItem) => item.id)
	ElMessageBox.confirm(`是否删除ID为${ids.join('、')}的数据`, '确认删除', {
		confirmButtonText: '确认',
		cancelButtonText: '取消'
	})
		.then(async () => {
			await delUser(ids)
			commonTableRef.value.reset()
			ElMessage.success('删除成功')
		})
		.catch(() => {})
}
</script>
