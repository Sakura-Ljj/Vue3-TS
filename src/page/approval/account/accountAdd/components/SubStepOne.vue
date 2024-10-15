<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-10-09 17:48:41
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-12 16:34:05
 * @FilePath: \Vue3-ts\src\page\approval\account\accountAdd\components\SubStepOne.vue
 * @Description: 
-->
<template>
	<div>
		<el-form :model="form" label-width="auto" style="max-width: 600px" class="tw-flex-1" :rules="rules" ref="ruleFormRef">
			<el-form-item label="账号名" prop="account">
				<el-input v-model="form.account" placeholder="请输入账号名" />
			</el-form-item>
			<el-form-item label="手机号" prop="mobile">
				<div class="tw-flex tw-w-full">
					<el-input v-model="form.mobile" placeholder="请输入手机号" />
					<el-button class="tw-ml-2 tw-min-w-28" type="primary" @click="getCode" :disabled="getCodeLock">
						<span v-if="getCodeLock">{{ countdown }}</span>
						<span v-else>获取验证码</span>
					</el-button>
				</div>
			</el-form-item>
			<el-form-item label="验证码" prop="code">
				<el-input v-model="form.code" placeholder="请输入验证码" />
			</el-form-item>
			<el-form-item label="性别">
				<el-radio-group v-model="form.sex">
					<el-radio v-for="(value, key) in SEX_MAP" :value="+key" :key="key">{{ value }}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="出生日期" prop="birthday">
				<el-date-picker v-model="form.birthday" type="date" placeholder="请选择出生日期" />
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="form.email" placeholder="请输入邮箱号xxx@xxx.xx" />
			</el-form-item>
			<el-form-item label="身份证号" prop="idnumber">
				<el-input v-model="form.idnumber" placeholder="请输入身份证号" />
			</el-form-item>

			<el-form-item label="个人简介" prop="introduction">
				<el-input type="textarea" :rows="4" v-model="form.introduction" placeholder="请输入个人简介" />
			</el-form-item>
		</el-form>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { SEX_MAP } from '@/config'
import { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
	account: string
	introduction: string
	sex: number
	email: string
	idnumber: string
	birthday: string
	mobile: string
	code: string
}

const ruleFormRef = ref<FormInstance>()
const form = ref<RuleForm>({
	account: 'Sakura',
	introduction:
		'SakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakuraSakura',
	sex: 0,
	email: 'aaa@aaa.com',
	idnumber: '44011111111111111',
	birthday: '2024年10月12日',
	mobile: '13222222222',
	code: ''
})

const validateCode = (_rule: any, value: any, callback: any) => {
	if (value !== code.value) {
		callback(new Error('验证码错误'))
		return
	}
	callback()
}

const rules = reactive<FormRules<RuleForm>>({
	account: [{ required: true, message: '请填写账号名', trigger: 'blur' }],
	introduction: [{ required: true, message: '请填写个人简介', trigger: 'blur' }],
	email: [{ required: true, message: '请填写邮箱号', trigger: 'blur' }],
	idnumber: [{ required: true, message: '请填写身份证号', trigger: 'blur' }],
	birthday: [{ required: true, message: '请选择出生日期', trigger: 'change' }],
	mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
	code: [
		{ required: true, message: '请输入验证码', trigger: 'blur' },
		{ validator: validateCode, message: '验证码错误', trigger: [] }
	]
})

const countdown = ref(60)
const getCodeLock = ref(false)
const code = ref('')
const getCode = () => {
	if (getCodeLock.value) return
	// 请求验证码
	code.value = '123456'

	// 加锁
	let timeId: any = -1
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	timeId = setInterval(() => {
		if (countdown.value <= 1) {
			clearInterval(timeId)
			getCodeLock.value = false
			return
		}
		getCodeLock.value = true
		countdown.value--
	}, 1000)
}

defineExpose({
	ruleFormRef,
	form
})
</script>
