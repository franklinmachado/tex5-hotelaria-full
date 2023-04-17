import router from '.';
const usuario = JSON.parse(localStorage.getItem('usuario')) ?? null;

/**
 *
 * @param {number} role - 1: visitante; 2: admin
 * @returns {boolean}
 */
function autorizado(role) {
	return role === 2;
}

export default {
	path: '/admin',
	component: () => import('../layouts/AdminLayout.vue'),
	beforeEnter: (to, from, next) => {
		if (!usuario) return router.push('');
		if (autorizado(usuario.role)) {
			next();
		};
	},
	children: [
		{
			path: '',
			name: 'AdminView',
			component: () => import('../views/AdminView.vue'),
		},
		{
			path: 'acomodacoes',
			name: 'AdminAcomodacoes',
			component: () => import('../views/AdminAcomodacoesView.vue'),
		},
		{
			path: 'cadastroAcomodacao',
			name: 'CadastroAcomodacao',
			component: () => import('../views/CadastroAcomodacaoView.vue'),
		},
		{
			path: 'editarAcomodacao',
			name: 'EditarAcomodacao',
			component: () => import('../views/EditarAcomodacaoView.vue'),
		},
		{
			path: '/admin-servicos-adicionais',
			name: 'AdminServicosAdicionais',
			component: () => import('../views/AdminServicosAdicionaisView.vue'),
		},
		{
			path: '/admin-usuarios',
			name: 'AdminUsuarios',
			component: () => import('../views/AdminUsuariosView.vue'),
		},
		{
		path: '/editar-usuario/:id&:nome&:telefone&:cpf&:email&:senha&:cidade&:estado&:numero&:rua&:bairro&:complemento',
		name: 'editar-usuario',
		component: () => import('../views/EditarUsuarioView.vue'),
		props: true,
		},
		{
			path: '/admin-reservas',
			name: 'AdminReservas',
			component: () => import('../views/AdminReservasView.vue'),
		},
		{
			path: '/admin-enderecos',
			name: 'AdminEnderecos',
			component: () => import('../views/AdminEnderecosView.vue'),
		},
		{
			path: '/admin-consumo',
			name: 'AdminConsumo',
			component: () => import('../views/AdminConsumoView.vue'),
		},
	],
};
