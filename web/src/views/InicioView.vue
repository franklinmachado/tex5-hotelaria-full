<template>
	<div id="bg">
		<section class="home" id="reload">
			<h1>CONFORTO E PRATICIDADE PARA VOCÊ</h1>

			<h3>"Aconchego, conforto, simpatia e alto astral"</h3>

			<a href="#conheca-o-hotel" class="btn">Saiba mais</a>
		</section>
	</div>
	<section class="conheca-o-hotel" id="conheca-o-hotel">
		<h3>Conheça o The Experience Hotel!</h3>
		<p>
			Fecha os olhos e imagine paraíso. Um lugar no meio da Mata Atlântica e
			banhado pelo mar, onde você encontra paz, tranquilidade, conforto e
			comodidade.
		</p>
		<hr />
		<ul class="grid">
			<li class="small">
				<img src="../assets/images/quarto_0.jpg" />
			</li>
			<li class="large">
				<img src="../assets/images/quarto_1.jpg" />
			</li>
			<li class="large">
				<img src="../assets/images/quarto_5.png" />
			</li>
			<li class="small">
				<img src="../assets/images/quarto_9.png" />
			</li>
		</ul>
	</section>
	<section class="caracteristicas" id="caracteristicas">
		<h3>Único hotel pé na areia do Brasil</h3>
		<p>
			Implantado em uma área completamente arborizada, o The Experience Hotel é
			o único hotel pé na areia do Brasil. Aqui o Mar será o seu companheiro e
			você terá as belezas da natureza como guia.
		</p>
		<hr />
		<ul class="grid">
			<li>
				<i class="fas fa-location-arrow"></i>
				<h4>Localização</h4>
				<p>
					Localizado no nordeste do Brasil, entre o mar e a Mata Atlântica, a
					região tem refrescantes cachoeiras e praias belíssimas, muitas delas
					tão pequenas que nem aparecem nos mapas.
				</p>
			</li>
			<li>
				<i class="fas fa-gift"></i>
				<h4>Pacote de Ofertas</h4>
				<p>
					Sabe aquele descontraído encontro com a familia e amigos? Ou um
					momento relax? Nossa com uma diversidade de espaços que proporcionam
					momentos inesquecíveis.
				</p>
			</li>
			<li>
				<i class="fas fa-home"></i>
				<h4>Acomodações</h4>
				<p>
					The Experience Hotel possuí 29 unidades, divididas entre 11 chalés, 16
					amplas suítes e 2 todas com TV a cabo, frigobar, além de varanda com
					rede.
				</p>
			</li>
		</ul>
	</section>
	<section class="newsletter" id="newsletter">
		<h3>Newsletter</h3>
		<p>
			Assine nossa newsletter para se manter atualizado com nossos serviços e a
			programação de nossos eventos culturais.
		</p>
		<hr />
		<form action="">
			<input type="text" placeholder="Email" />
			<button>Cadastrar</button>
		</form>
	</section>

	
</template>

<script>
import Titlecomponent from '@/components/Titlecomponent.vue';

export default {
	name: 'InicioView',
	data() {
		return {
			img: '',
			imgReload: [
				{ id: 1, img: require('@/assets/images/home_hotel.jpg') },
				{ id: 2, img: require('@/assets/images/banner1.jpeg') },
				{ id: 3, img: require('@/assets/images/banner3.jpeg') },
			],
		};
	},
	components: {
		Titlecomponent,
	},

	methods: {
		reload() {
			const imgRandom = Math.floor(Math.random() * this.imgReload.length) + 1;

			const imgAtt = this.imgReload.find((data) => data.id === imgRandom);

			this.img = `url("${imgAtt.img}")`;
		},
	},
	mounted() {
		this.reload();
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.home {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: v.$gradient-dark, v-bind(img) fixed bottom;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
}

.home h1 {
	font-size: 3.2rem;
	margin-bottom: 15px;
	color: #ffffff;
	text-shadow: 0.1em 0.1em 0.2em black;
	max-width: 90vw;
}

.home h3 {
	font-size: 2rem;
	margin-bottom: 50px;
	color: #ffffff;
	text-shadow: 0.1em 0.1em 0.2em black;
}

.home .btn {
	background-color: v.$yellow;
	border-radius: 4px;
	color: v.$main-blue;
	padding: 20px 50px;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
}

.home .btn:hover {
	background-color: v.$dark-blue;
	color: #ffffff;
}

/* CONHEÇA O HOTEL */

.conheca-o-hotel {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 50px;
	background: #eee;
}

.conheca-o-hotel h3 {
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 35px;
	color: v.$main-blue;
	text-align: center;
}

.conheca-o-hotel p {
	max-width: 800px;
	margin-bottom: 35px;
	color: v.$main-blue;
	text-align: center;
	font-size: 1.2rem;
}

.conheca-o-hotel hr {
	width: 200px;
	height: 2px;
	background-color: v.$main-blue;
	margin-bottom: 70px;
	border: none;
}

.conheca-o-hotel .grid {
	width: 100%;
	display: flex;
	gap: 1.2rem;
	justify-content: center;
}

.conheca-o-hotel ul {
	width: 100%;
}

.conheca-o-hotel .grid li img {
	border-radius: 0.5rem;
	aspect-ratio: 4/3;
	gap: 1.2rem;
	max-height: 40vh;
}

/* CARACTERISTICAS */
.caracteristicas {
	background-color: v.$dark-blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 50px;
}

.caracteristicas h3 {
	font-size: 2rem;
	margin-bottom: 35px;
	color: #eee;
	text-align: center;
}

.caracteristicas p {
	max-width: 800px;
	margin-bottom: 35px;
	color: #eee;
	text-align: center;
}

.caracteristicas hr {
	width: 200px;
	height: 2px;
	background-color: #eee;
	margin-bottom: 70px;
	border: none;
}

.caracteristicas .grid {
	width: 100%;
	display: flex;
}

.caracteristicas .grid li {
	padding: 0 30px;
	text-align: center;
}

.caracteristicas .grid li i {
	color: #eee;
	font-size: 50px;
	margin-bottom: 30px;
}

.caracteristicas .grid li h4 {
	font-size: 1.5rem;
	color: #eee;
	margin-bottom: 30px;
}

.caracteristicas .grid li p {
	color: #eee;
}

/* CNEWSLETTER */
.newsletter {
	min-height: 65vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 50px;
}

.newsletter h3 {
	font-size: 2rem;
	margin-bottom: 35px;
	color: v.$main-blue;
	text-align: center;
}

.newsletter p {
	max-width: 800px;
	margin-bottom: 35px;
	color: v.$main-blue;
	text-align: center;
}

.newsletter hr {
	width: 200px;
	height: 2px;
	background-color: v.$main-blue;
	margin-bottom: 70px;
	border: none;
}

.newsletter form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 80%;
	max-width: 800px;
}

.newsletter input {
	padding: 15px;
	border: 1px solid v.$main-blue;
	border-radius: 4px;
	margin-right: 15px;
	flex: 1;
}

.newsletter button {
	padding: 15px;
	background-color: v.$main-blue;
	color: #eee;
	text-transform: uppercase;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.newsletter button:hover {
	padding: 15px;
	background-color: #2c425b;
	color: #eee;
	text-transform: uppercase;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

@media (max-width: 768px) {
	.home h1 {
		font-size: 2.5rem;
		max-width: 80vw;
	}

	.home h3 {
		font-size: 1.8rem;
		max-width: 70vw;
	}
	.conheca-o-hotel .grid {
		flex-direction: row;
		display: grid;
		grid-template-columns: repeat(2, auto);
	}

	.conheca-o-hotel .grid li img {
		max-height: 40vh;
	}

	.caracteristicas .grid {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 460px) {
		.conheca-o-hotel .grid {
			flex-direction: row;
			display: grid;
			grid-template-columns: repeat(1, auto);
		}
		.newsletter form {
			display: flex;
			align-items: stretch;
			flex-wrap: wrap;
			width: 100%;
			max-width: 800px;
			flex-direction: column;
		}
		.newsletter input {
			margin: auto;
			width: 100%;
		}
		.newsletter button {
			margin: 1rem auto;
		}
	}
}
</style>
