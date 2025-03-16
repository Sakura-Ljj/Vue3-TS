<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-10-09 15:50:29
 * @LastEditors: Sakura 1430008132@qq.com
 * @LastEditTime: 2025-02-26 16:54:19
 * @FilePath: \Vue3-TS\src\page\approval\account\accountAdd\index.vue
 * @Description: 
-->
<template>
	<div class="tw-w-full tw-h-full tw-bg-white tw-flex tw-flex-col tw-items-center">
		<el-steps :active="activeStep" align-center class="tw-pt-3 tw-w-full">
			<el-step v-for="item in steps" :key="item.title" :title="item.title" :description="item.description" />
		</el-steps>
		<component
			:is="activeStepComponent[activeStep]"
			class="tw-my-7 tw-w-full tw-flex tw-justify-center"
			ref="subStepRef"
			:stepsData="stepsData"
		/>
		<div>
			<el-button v-show="activeStep > 1 && activeStep !== steps.length" @click="previousStep">上一步</el-button>
			<el-button v-show="activeStep === steps.length - 1" type="primary" @click="submit">提交</el-button>
			<el-button v-show="activeStep === steps.length" type="primary" @click="confirm">完成</el-button>
			<el-button v-show="activeStep < steps.length - 1" type="primary" @click="nextStep">下一步</el-button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SubStepOne from './components/SubStepOne.vue'
import SubStepTwo from './components/SubStepTwo.vue'
import SubStepThree from './components/SubStepThree.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const steps = ref([
	{
		title: '基本信息',
		description: '填写基本信息'
	},
	{
		title: '提交申请',
		description: '确认信息'
	},
	{
		title: '提交成功',
		description: '提交成功'
	}
])

const activeStep = ref(1)
const activeStepComponent: { [key: number]: any } = {
	1: SubStepOne,
	2: SubStepTwo,
	3: SubStepThree
}
const activeStepData: { [key: number]: string } = {
	1: 'oneStepData',
	2: 'twoStepData',
	3: 'threeStepData'
}
const subStepRef = ref()

const stepsData = reactive<{ [key: string]: any }>({
	oneStepData: {},
	twoStepData: {},
	threeStepData: {}
})

const nextStep = async () => {
	let canNext = true
	await subStepRef.value.ruleFormRef?.validate((valid: boolean) => {
		canNext = valid
	})
	if (!canNext) return

	stepsData[activeStepData[activeStep.value]] = subStepRef.value.form
	activeStep.value++
}

const previousStep = () => {
	activeStep.value--
}

const submit = () => {
	activeStep.value++
}

const confirm = () => {
	router.replace('/approval/account/list')
}
</script>
