<!--
 * @Author: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @Date: 2024-05-20 11:50:33
 * @LastEditors: TENCENT\v_jnnjieluo v_jnnjieluo@tencent.com
 * @LastEditTime: 2024-07-03 17:14:53
 * @FilePath: \Vue3-ts\README.md
 * @Description: 
-->
# Vue 3 + TypeScript + Vite

# 踩坑点
- 按需引入element plus的icon图标需要单独下载 **@iconify-json/ep** 模块, 然后在项目中图标的引入方式为 **i-ep-icon** 这种形式
- 在组件中调用自身, 即递归调用组件, 只需要在组件中的script标签中加上 **name** 属性
- 组件中深层选择类使用 **:deep()** 方法, 选中同级类中间不带空格即可, 如`.class.class`
- 使用 **vite-plugin-svg-icons** 模块对svg图标进行统一管理使用
- element plus的table组件的自适应宽度在其处于一个 **flex: 1** 的容器中会出现bug, 导致固定列不生效, 目前使用的解决办法是给予拥有 **flex: 1** 的父元素 **postions: relative** 属性, 然后给table组件套一层 **div** 然后设置 **postions: absolute** 属性