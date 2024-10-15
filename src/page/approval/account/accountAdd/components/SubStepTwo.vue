<!--
 * @Author: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-10-09 17:48:52
 * @LastEditors: V_JNNJIELU-PCGP\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-10-12 16:48:13
 * @FilePath: \Vue3-ts\src\page\approval\account\accountAdd\components\SubStepTwo.vue
 * @Description: 
-->
<template>
	<div>
		<div class="tw-p-4 tw-bg-gray-50 tw-text-sm tw-text-gray-600 page-section tw-break-all">
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">账号名:</div>
				<div>{{ stepsData.oneStepData.account }}</div>
			</div>
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">手机号:</div>
				<div>{{ stepsData.oneStepData.mobile }}</div>
			</div>
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">性别:</div>
				<div>{{ SEX_MAP[stepsData.oneStepData.sex] }}</div>
			</div>
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">出生日期:</div>
				<div>{{ stepsData.oneStepData.birthday }}</div>
			</div>
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">邮箱:</div>
				<div>{{ stepsData.oneStepData.email }}</div>
			</div>
			<div class="tw-mb-4 tw-flex">
				<div class="tw-mr-4 tw-min-w-16">身份证号:</div>
				<div>{{ stepsData.oneStepData.idnumber }}</div>
			</div>
			<div class="tw-flex">
				<div class="tw-mr-4 tw-min-w-16">个人简介:</div>
				<div>{{ stepsData.oneStepData.introduction }}</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { SEX_MAP } from '@/config'

interface SubStepTwoProps {
	stepsData: { [key: string]: any }
}

defineProps<SubStepTwoProps>()
</script>
<style lang="less">
.page-section {
	max-width: 600px;
	border: 1px dashed #e9e9e9;
}
</style>
