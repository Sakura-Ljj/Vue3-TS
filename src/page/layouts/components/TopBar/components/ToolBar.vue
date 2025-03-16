<template>
	<div>
		<!-- 用户信息操作 -->
		<div>
			<div class="tw-flex tw-items-center tw-mr-5">
				<div class="tw-mr-3">Sakura</div>
				<el-dropdown trigger="click">
					<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="tw-cursor-pointer" />
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item icon="User">个人信息</el-dropdown-item>
							<el-dropdown-item icon="Edit">修改密码</el-dropdown-item>
							<el-dropdown-item icon="SwitchButton" @click="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script setup>
import { logoutServer } from '@/api/modules/login'
import { useRouter } from 'vue-router'
import { LOGIN_URL } from '@/config'
const router = useRouter()
const logout = async () => {
	await logoutServer()
	router.replace(LOGIN_URL)
	ElMessage.success('成功登出')
}
</script>
