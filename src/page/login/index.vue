<template>
	<div class="tw-w-full tw-h-full tw-bg-gray-100 tw-px-8 tw-flex tw-justify-center tw-items-center">
		<div class="login-box">
			<!-- Login-Left -->
			<div class="login-left">
				<img src="@/assets/image/login_left.png" alt="" />
			</div>
			<!-- Login-Right -->
			<div class="form-box">
				<div class="form-back" v-show="isRegister" @click="isRegister = false">
					<el-icon class="tw-text-lg">
						<ArrowLeftBold />
					</el-icon>
					<span class="tw-text-base">返回</span>
				</div>
				<!-- Title -->
				<div class="tw-flex tw-justify-center tw-mb-11">
					<img src="@/assets/svg/vue.svg" alt="logo" />
					<span class="tw-text-4xl tw-font-bold tw-text-gray-600 tw-pl-4">Vue3 + Vite</span>
				</div>
				<!-- 登录框 -->
				<div>
					<el-form :model="form" label-width="auto" ref="loginFromRef">
						<el-form-item prop="account">
							<el-input v-model="form.account" placeholder="请输入账号" prefix-icon="User" />
						</el-form-item>
						<el-form-item prop="password">
							<el-input v-model="form.password" placeholder="请输入密码" prefix-icon="Lock" show-password />
						</el-form-item>
					</el-form>
					<div
						class="tw-text-right tw-mb-5 tw-text-sm tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-400"
						@click="isRegister = true"
						v-show="!isRegister"
					>
						注册账号
					</div>
					<div class="tw-flex">
						<el-button round size="large" class="tw-flex-1" icon="CircleClose" @click="resteFrom(loginFromRef)">重置</el-button>
						<el-button
							v-if="isRegister"
							type="primary"
							round
							size="large"
							class="tw-flex-1"
							icon="User"
							@click="register(loginFromRef)"
						>
							注册
						</el-button>
						<el-button v-else type="primary" round size="large" class="tw-flex-1" icon="User" @click="login">登录</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormInstance } from 'element-plus'
import { Login } from '@/api/modules/interface'
import { loginServer, registerServer } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user'
import { initDynamicRouter } from '@/routers/modules/dynamicRouter'
import { HOME_URL } from '@/config'
import { useRouter } from 'vue-router'
import { timeCallStr } from '@/utils/util'

const router = useRouter()
const form = reactive<Login.LoginServerParams>({
	account: '',
	password: ''
})

const loginFromRef = ref<FormInstance>()

const resteFrom = (formEl: FormInstance | undefined) => {
	formEl?.resetFields()
}
const isRegister = ref(false)

const register = async (formEl: FormInstance | undefined) => {
	await registerServer({
		password: form.password,
		account: form.account
	})
	formEl?.resetFields()
	isRegister.value = false
}

const login = async () => {
	const userStore = useUserStore()

	const token = await loginServer({
		password: form.password,
		account: form.account
	})
	userStore.setToken(token)
	// 初始化路由
	await initDynamicRouter()
	ElNotification({
		title: '登录成功',
		message: `${timeCallStr()}, Sakura`,
		type: 'success'
	})
	router.push(HOME_URL)
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
