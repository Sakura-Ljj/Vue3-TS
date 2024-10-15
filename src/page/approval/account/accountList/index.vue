<template>
	<div class="tw-w-full tw-h-full tw-bg-white">
		<el-button type="primary" @click="router.push('/approval/account/add')">账号创建申请</el-button>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
