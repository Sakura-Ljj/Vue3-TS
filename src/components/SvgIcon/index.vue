<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-06-28 15:29:54
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-06-28 16:08:39
 * @FilePath: \Vue3-ts\src\components\SvgIcon\index.vue
 * @Description: 
-->
<template>
	<svg aria-hidden="true" :style="iconStyle">
		<use :href="symbolId" />
	</svg>
</template>
<script lang="ts" setup name="SvgIcon">
import { computed, CSSProperties } from 'vue'

interface SvgProps {
	prefix?: string
	name: string
	iconStyle?: CSSProperties
}

// 接受父组件传入参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
	prefix: 'icon',
	iconStyle: () => ({ width: '16px', height: '16px' })
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
