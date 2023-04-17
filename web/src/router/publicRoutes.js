export default {
	path: '',
	name: 'PublicLayout',
	component: () => import('../layouts/PublicLayout.vue'),
	children: [
		{
			path: '',
			name: 'Inicio',
			component: () => import('../views/InicioView.vue'),
		},
		{
			path: '/acomodacoes',
			name: 'acomodacoes',
			component: () => import('../views/AcomodacoesView.vue'),
		},
		{
			path: '/reservas',
			name: 'reservas',
			component: () => import('../views/ReservasView.vue'),
		},
		{
			path: '/sobre',
			name: 'sobre',
			component: () => import('../views/SobreView.vue'),
		},
		{
			path: '/contato',
			name: 'contato',
			component: () => import('../views/ContatoView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
		},
		{
			path: '/cadastro',
			name: 'cadastro',
			component: () => import('../views/CadastroView.vue'),
		},
	],
};
