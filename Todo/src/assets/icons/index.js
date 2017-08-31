import Vue from 'vue'
import iconSvg from '@/components/iconSvg/icon-svg'// svg组件
// import generateIconsView from '@/views/svg-icons/generateIconsView.js'// 所有图标展示

Vue.component('icon-svg', iconSvg)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

// generateIconsView.generate(iconMap) // 所有图标展示
