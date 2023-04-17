<template>
	<header>
		<nav class="navbar">
			<!-- LOGO -->
			<div class="logo">
				<img class="logo1" src="../assets/icons/texhotel_logo2.svg" />
				<img class="logo2" src="../assets/icons/logo_escrito.svg" />
			</div>
			<!-- NAVEGAÇÃO MENU -->
			<ul class="nav__links">
				<!-- CHECKBOX HACK -->
				<input type="checkbox" id="checkbox_toggle" />
				<label for="checkbox_toggle" class="hamburger">&#9776;</label>
				<!-- NAVEGAÇÃO MENUS -->
				<div class="menu">
					<li>
						<router-link to="/">Início</router-link>
					</li>
					<li>
						<router-link to="acomodacoes">Acomodações</router-link>
					</li>
					<li>
						<router-link to="reservas">Reservas</router-link>
					</li>
					<li>
						<router-link to="sobre">Sobre</router-link>
					</li>
					<li>
						<router-link to="contato">Contato</router-link>
					</li>
					<li class="services">
						<a href="/">Visitante <span class="arrow-icon">&#9660;</span></a>
						<!-- MENU SUSPENSO OU DROPDOWN MENU -->
						<ul class="dropdown">
							<li><a href="login">Entrar </a></li>
							<li><a href="#">Sair</a></li>
							<li><a href="#">Perfil</a></li>
						</ul>
					</li>
				</div>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
a {
	text-decoration: none;
	cursor: pointer;
	opacity: 0.9;
}

a:hover {
	opacity: 1;
}

.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 2rem;
	background-color: #415a77;
	width: 100vw;
	color: #fff;
	position: fixed;
 	top: 0;
	left: 0;
}

.nav__links {
	list-style: none;
}

.nav__links a {
	color: #fff;
}

/* LOGO */
.logo {
	width: 8.5%;
}

.logo2 {
	display: none;
}

/* NAVBAR MENU */
.menu {
	display: flex;
	gap: 1em;
	font-size: 18px;
}

.menu li {
	padding: 5px 14px;
}

.menu li:hover {
	background-color: #516b8a;
	border-radius: 5px;
	transition: 0.3s ease;
}

/* MENU SUSPENSO */
.services {
	position: relative;
	margin-right: 20px;
}

.dropdown {
	background-color: #415a77;
	padding: 1em 0;
	position: absolute; /*COM RELAÇÃO AOS PAIS*/
	display: none;
	margin-right: 10px;
	border-radius: 8px;
	top: 30px;
}
.dropdown li + li {
	margin-top: 10px;
}

.dropdown li {
	padding: 0.5em 1em;
	width: 8em;
	text-align: center;
}

.dropdown li:hover {
	background-color: #516b8a;
}

.services:hover .dropdown {
	display: block;
}

/* RESPONSIVIDADE */
/* NAVBAR MENU RESPONSIVA*/
/* CHECKBOX HACK */
input[type='checkbox'] {
	display: none;
}

/*HAMBURGER MENU*/
.hamburger {
	display: none;
	font-size: 24px;
	user-select: none;
}

/*ARROW ICON*/
.arrow-icon {
	/* display: none; */
	font-size: 10px;
	user-select: none;
}

/* APLICAÇÃO MEDIA QUERIES */
@media (max-width: 768px) {
	.logo {
		width: 30%;
		margin: 1rem auto;
	}

	.logo1 {
		display: none;
	}

	.logo2 {
		display: block;
	}

	.menu {
		display: none;
		position: absolute;
		background-color: #415a77;
		right: 0;
		left: 0;
		text-align: center;
		padding: 16px 0;
	}
	.menu li:hover {
		display: inline-block;
		background-color: #516b8a;
		transition: 0.3s ease;
	}
	.menu li + li {
		margin-top: 12px;
	}
	input[type='checkbox']:checked ~ .menu {
		display: block;
	}
	.hamburger {
		display: block;
		margin: auto 1rem;
	}
	.dropdown {
		left: 50%;
		top: 30px;
		transform: translateX(35%);
	}
	.dropdown li:hover {
		background-color: #4c9e9e;
	}
}
</style>
