<template>
	<div class="task-manager">
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
		<div class="left-bar">
			<div class="logo"></div>
			<div class="left-content">
				<ul class="action-list">
					<li class="item">
						<i class="fa-solid fa-hotel"></i>
						<span>Hotel</span>
					</li>
					<li class="item">
						<i class="fa-solid fa-bed"></i>
						<span> Cadastrar acomodação</span>
					</li>
					<li class="item">
						<i class="fa-regular fa-calendar-check"></i>
						<span>Reservas</span>
					</li>
					<li class="item">
						<i class="fa-solid fa-tags"></i>
						<span>Cupons</span>
					</li>
					<li class="item">
						<i class="fa-solid fa-star-half-stroke"></i>
						<span>Avaliações</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="page-content">
			<div class="panel_header">Painel Administrativo</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
* {
	box-sizing: border-box;
	outline: none;
}

.logo {
	background-image: url('../assets/icons/logo_escrito.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: calc(128px + 3vw);
	height: 32px;
	margin: 1rem auto;

	@media (min-width: 768px) {
		background-image: url('../assets/icons/texhotel_logo2.svg');
		height: 96px;
	}
}

%flex {
	display: flex;
	align-items: center;
}

body {
	margin: 0;
	@extend %flex;
	justify-content: center;
	flex-direction: column;
	overflow: auto;
	width: 100%;
	height: 100vh;
	padding: 20px;
	font-family: 'DM Sans', sans-serif;
	font-size: 12px;
}

ul {
	list-style-type: none;
	padding: 0;
}

button {
	border: none;
	background: none;
	cursor: pointer;
}

.task-manager {
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1600px;
	margin: 3rem auto;
	height: 90vh;
	max-height: 1000px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
		0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
		0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
		0 10px 80px rgba(0, 0, 0, 0.04);
	overflow: hidden;
}

.left-bar {
	background-color: v.$dark-blue;
	width: 20%;
	border-right: 1px solid #e3e7f7;
	position: relative;
}

.left-content {
	padding: 40px;
}

.item {
	@extend %flex;
	cursor: pointer;
	color: v.$light-gray;
	margin-bottom: 1.4rem;
	font-weight: 500;

	i {
		width: 20px;
		height: 20px;
		color: v.$light-yellow;
		margin-right: 10px;
	}
}

.actions {
	padding: 12px;
	display: flex;
	justify-content: space-between;
}

.top-part {
	padding: 30px;
	@extend %flex;
	align-self: flex-end;

	svg {
		width: 14px;
		height: 14px;
		color: var(--main-color);
		margin-right: 14px;
	}

	.count {
		font-size: 12px;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		background-color: #623ce8;
		color: #fff;
		@extend %flex;
		justify-content: center;
	}
}

.more-button {
	position: absolute;
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background-color: #8e92a4;
	box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;
	opacity: 0.4;
	right: 20px;
	top: 30px;
	cursor: pointer;
}

.page-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 40px 20px 0 20px;

	.panel_header {
		font-size: 2rem;
		color: var(--main-color);
		margin-top: 30px;
		text-align: center;
	}
}

.content-categories {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	border-bottom: 1px solid #ddd;
	padding: 20px 0;
}

.nav-item {
	display: none;
}

.category {
	font-weight: 500;
	color: var(--secondary-color);
	border-bottom: 1px solid #ddd;
	transition: 0.4s ease-in;
	padding: 20px 30px;
	cursor: pointer;
}

#opt-1:checked + label,
#opt-2:checked + label,
#opt-3:checked + label,
#opt-4:checked + label {
	color: var(--checkbox-color);
	border-bottom: 2px solid var(--checkbox-color);
}

.task-item {
	display: none;
}

.tasks-wrapper {
	padding: 30px 0;
	flex: 1;
	overflow-y: auto;
	height: 100%;
	padding-right: 8px;
}

.task {
	display: flex;
	justify-content: space-between;
	position: relative;
	margin-bottom: 16px;
	padding-left: 30px;
	color: var(--task-color);
	font-size: 13px;
	font-weight: 500;

	&:hover {
		transform: translatex(2px);
	}

	label {
		cursor: pointer;
	}
}

label .label-text {
	position: relative;
}

label .label-text:before {
	content: '';
	position: absolute;
	width: 14px;
	height: 14px;
	border: 1px solid #ddd;
	border-radius: 2px;
	left: -24px;
	transition: 0.2s ease;
}

.task-item:checked + label .label-text:before {
	background-color: var(--checkbox-color);
	border: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-size: 10px;
	background-position: center;
	border: 1px solid var(--checkbox-color);
}

.tag {
	font-size: 10px;
	padding: 4px 8px;
	border-radius: 20px;

	&.approved {
		background-color: var(--tag-color-one);
		color: var(--tag-color-text-one);
	}

	&.progress {
		background-color: var(--tag-color-two);
		color: var(--tag-color-text-two);
	}

	&.review {
		background-color: var(--tag-color-three);
		color: var(--tag-color-text-three);
	}

	&.waiting {
		background-color: var(--tag-color-four);
		color: var(--tag-color-text-four);
	}
}

.upcoming {
	border-bottom: 1px solid #ddd;
	padding-bottom: 30px;
	margin-bottom: 30px;
}

@media screen and (max-width: 900px) {
	.left-bar {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	.task-manager {
		flex-direction: column;
		overflow-y: auto;
	}

	.right-bar,
	.page-content {
		width: 100%;
		display: block;
	}

	.tasks-wrapper {
		height: auto;
	}
}

@media screen and (max-width: 520px) {
	.page-content {
		padding: 40px 10px 0 10px;
	}

	.right-content {
		padding: 10px 16px;
	}

	.category {
		padding: 20px;
	}
}
</style>
