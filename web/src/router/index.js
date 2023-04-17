import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './adminRoutes';
import publicRoutes from './publicRoutes';

const routes = [publicRoutes, adminRoutes];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
