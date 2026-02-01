import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: '/', component: Landing }],
})

export default router
