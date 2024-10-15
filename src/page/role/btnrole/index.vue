<template>
	<div>btnRole</div>
</template>

<script setup lang="ts">
import { useCommonTable } from '@/hooks/userCommonTable'
const { paginationParams } = useCommonTable()
console.log(paginationParams.value)
</script>
