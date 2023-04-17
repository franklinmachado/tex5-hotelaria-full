<template>
	<section class="lugares__hotel">
		<h3 class="lugares__titulo">T.Experience Hotel</h3>
		<p class="lugares__paragrafo">
			Implantado em uma área completamente arborizada, o The Experience Hotel é
			o único hotel pé na areia do Brasil. Aqui o Mar será o seu companheiro e
			você terá as belezas da natureza como guia. The Experience Hotel possuí 29
			unidades, divididas entre 11 chalés, 16 amplas suítes e 2 todas com TV a
			cabo, frigobar, além de varanda com rede e muitos outros lazeres. Em nosso
			hotel você achara ótimos pontos turísticos com uma facilidade para sua
			mobilidade, além de belas praias além de todos as ferramentas para seus
			hobbies favoritos dentro de nosso magnífico hotel de várias experiênias
			fantásticas.
		</p>
		<hr class="lugares__divisor" />
		<h3 class="lugares__titulo">"Cantinhos" do nosso hotel!!</h3>
		<div class="lugares__gridImagens">
			<div id="card1" class="card">
				<h2 class="card__titulo"></h2>
				<img
					class="card_img"
					src="../assets/images/pexels-asman-chema-594077.jpg"
					alt=""
				/>
			</div>
			<div id="card2" class="card">
				<h2 class="card__titulo"></h2>
				<img
					class="card_img"
					src="../assets/images/pexels-naim-benjelloun-2290753.jpg"
					alt=""
				/>
			</div>
			<div id="card3" class="card">
				<h2 class="card__titulo"></h2>
				<img
					class="card_img"
					src="../assets/images/pexels-pixabay-161758.jpg"
					alt=""
				/>
			</div>
			<div id="card4" class="card">
				<h2 class="card__titulo"></h2>
				<img
					class="card_img"
					src="../assets/images/pexels-pixabay-262047.jpg"
					alt=""
				/>
			</div>
			<div id="card5" class="card">
				<h2 class="card__titulo"></h2>
				<img class="card_img" src="../assets/images/swimming-pool.jpg" alt="" />
			</div>
			<div id="card6" class="card">
				<h2 class="card__titulo"></h2>
				<img
					class="card_img"
					src="../assets/images/sun-loungers-near-palms-and-swimming-pool-in-sunny-day.jpg"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>

<script></script>
<style lang="scss" scoped>
.sobre__nos {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background-image: url(../assets/images/banner2.jpeg);
	background-attachment: fixed;
	background-size: cover;
	min-height: 100vh;
	width: 100%;
	color: black;
}
.sobre__nos h1 {
	font-size: 3.5rem;
	margin-bottom: 15px;
	color: black;
}
.sobre__nos h3 {
	font-size: 2.2rem;
	margin-bottom: 50px;
	color: black;
}

.lugares__hotel {
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 5rem;
}

.lugares__titulo {
	font-size: 2rem;
	margin: 45px 0 35px 0;
	color: #0c1926;
	text-align: center;
	font-weight: 700;
}

.lugares__paragrafo {
	font-size: 1.1rem;
	line-height: 1.6rem;
	max-width: 80%;
	margin-bottom: 35px;
	letter-spacing: 1px;
	color: #3b3b3b;
	text-align: center;
}

.lugares__divisor {
	width: 500px;
	height: 2px;
	background-color: #999;
	margin-bottom: 2rem;
	border: none;
}

.lugares__gridImagens {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.card {
	aspect-ratio: 4/3;
	width: 45%;
	margin: 1rem;
	border-radius: 5px;

	@media (max-width: 768px) {
		width: 100%;
	}
}

.card_img {
	height: 100%;
	box-shadow: 8px 8px 14px #999;
	object-fit: cover;
}
</style>
