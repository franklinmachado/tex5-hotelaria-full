<template>
	<header>
		<div class="header__container">
			<div class="logo"></div>
			<nav class="navbar">
				<button
					type="button"
					@click="mostrarNavegacao"
					:data-open="navegacaoAmostra"
					aria-controls="main-navigation"
				>
					<span class="visually-hidden">Acessar menu navegação</span>
				</button>
				<ul
					class="main-navigation"
					id="main-navigation"
					:data-open="navegacaoAmostra"
				>
					<li>
						<router-link :to="{ name: 'AdminView' }">Início</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'AdminAcomodacoes' }"
							>Acomodações</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'AdminServicosAdicionais' }"
							>Serviços Adicionais</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'AdminUsuarios' }">Usuários</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'AdminReservas' }">Reservas</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'AdminEnderecos' }"
							>Endereços</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'AdminConsumo' }">Consumo</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AdminHeader',
	data() {
		return {
			navegacaoAmostra: false,
		};
	},
	methods: {
		mostrarNavegacao() {
			this.navegacaoAmostra = !this.navegacaoAmostra;
		},
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.visually-hidden {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

header {
	background-color: #415a77;

	.header__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		width: 90%;
		max-width: 1440px;
		margin-inline: auto;
		padding-block: 16px;

		.logo {
			background-image: url('../assets/icons/logo_escrito.svg');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			width: calc(128px + 3vw);
			height: 32px;

			@media (min-width: 768px) {
				background-image: url('../assets/icons/texhotel_logo2.svg');
				height: 96px;
			}
		}
	}
}

nav {
	button {
		background-color: transparent;
		background-image: url('../assets/icons/list.svg');
		background-size: cover;
		border: 0;
		height: 32px;
		width: 32px;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.main-navigation {
		background-color: #415a77;
		display: none;
		left: 50%;
		position: absolute;
		padding-inline: calc(16px + 2vw);
		padding-block: 16px;
		text-align: center;
		transform: translateX(-50%);
		width: 100%;

		&[data-open='true'] {
			display: block;
		}

		@media (min-width: 768px) {
			align-items: center;
			display: flex;
			gap: 1rem;
			padding-inline: 0;
			position: relative;
		}

		li {
			font-size: 18px;
			padding: 0.5rem;

			a {
				color: #fff;
				text-decoration: none;

				@media (min-width: 768px) {
					font-size: 16px;
				}

				&:visited {
					color: inherit;
				}
			}

			&:hover {
				text-decoration: underline;
				display: inline-block;
				background-color: #516b8a;
				transition: 0.3s ease;
			}

			& + li {
				margin-block-start: 1rem;

				@media (min-width: 768px) {
					margin-block-start: 0;
				}
			}
		}
	}
}
</style>
