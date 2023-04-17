<template>
	<main class="form_main">
		<div class="form_default">
			<fieldset class="form_fields">
				<form
					class="form_geral"
					action=""
					method="post"
					enctype="multipart/form-data"
				>
					<div class="input_form">
						<label for="nome">Nome</label>
						<input
							type="text"
							id="nome"
							name="nome"
							placeholder="Digite seu Nome"
							required
						/>
					</div>
					<div class="input_form">
						<label for="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Digite seu Email"
							required
						/>
					</div>
					<div class="input_form">
						<label for="telefone">Telefone</label>
						<input
							type="number"
							id="telefone"
							name="telefone"
							placeholder="Digite seu Número"
							required
						/>
					</div>
					<div class="input_form">
						<label for="tipo_servico">Assunto</label>
						<select class="select" name="serviso" id="serviso">
							<option value="auto_select">Selecione uma Opção</option>
							<option id="cancela_reserva">Cancelamento de Reserva</option>
							<option value="ouvidoria">Ouvidoria</option>
							<option value="departamento_financeiro">
								Departamento financeiro
							</option>
							<option value="datas">Remarcação de datas</option>
							<option value="feedback">Reclamações/Opiniões</option>
						</select>
					</div>
					<div class="input_form">
						<label for="mensagem">Mensagem</label>
						<textarea
							class="text_area"
							name="mensagem"
							id="mensagem"
							cols="30"
							rows="10"
						></textarea>
					</div>
					<div class="input_form">
						<button class="button_form">Enviar Mensagem</button>
					</div>
				</form>

				<legend class="section_title">
					<h2>Fale Conosco</h2>
				</legend>
				<div class="info">
					<ul>
						<li>R. Dep. Laércio Corte, 1501 - Panamby, São Paulo</li>
						<li>+55 (11) 9999 - 9999</li>
						<li>+55 (11) 9999 - 9999</li>
						<li>reservas@texhotel.com</li>
					</ul>
				</div>
			</fieldset>
		</div>
	</main>
</template>

<script>
import Titlecomponent from '@/components/Titlecomponent.vue';

export default {
	name: 'InicioView',
	components: {
		Titlecomponent,
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.form_main {
	width: 100%;
}

.section_title h2 {
	font-weight: 700;
	color: v.$main-blue;
}

/*form*/
.form_default {
	display: flex;
	margin: auto;
	margin-top: 2%;
	color: v.$main-blue;
}
.input_form {
	width: 80%;
	font-weight: 700;
	font-size: 1rem;
	text-transform: uppercase;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form_fields {
	width: 50%;
	margin: 1.5rem auto;
	align-items: center;
	border: 1px solid v.$main-blue;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
		margin: auto;
	}
}
.form_fields legend {
	text-align: center;
}

.form_fields label {
	color: v.$main-blue;
}
.info {
	margin-top: 4rem;
	text-transform: uppercase;
	text-align: center;
	gap: 4rem;
	color: v.$dark-blue;

	li {
		padding: 1% 0;
	}
}

.input_form {
	width: 100%;
	font-weight: 700;
	font-size: 1rem;
	text-transform: uppercase;
}

.form_fields input {
	width: 70%;
	height: 45px;
	margin-top: 0.5rem;
	padding: 1.2rem 0;
	height: 30px;
	background-color: v.$light-gray;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	text-align: center;
	border-radius: 1rem;

	@media (max-width: 768px) {
		width: 100%;
		margin: 0.5rem auto;
	}
}
.form_fields textarea:focus,
input:focus,
select:focus {
	border: 1px solid v.$light-blue;
}
.form_fields label {
	font-size: 15px;
	display: flex;
}

.input_form {
	text-align: center;
	margin: auto;

	padding: 0;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
		margin: auto;
	}
}

.select {
	width: 50%;
	height: 45px;
	margin-top: 10px;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	color: v.$dark-blue;
	background: v.$light-gray;
	border-radius: 1rem;
}

.section_title {
	font-size: 30px;
	font-weight: bold;
}

.input_form {
	margin: 1rem 1rem;
}

.text_area {
	width: 70%;
	height: 20%;
	margin-top: 10px;
	padding: 0.8rem;
	border: 0.5px solid v.$main-blue;
	border-radius: 1rem;
	resize: none;
	background: v.$light-gray;
	@media (max-width: 768px) {
		width: 100%;
		margin: auto;
	}
}

.button_form {
	margin: auto;
	width: 25%;
	font-size: 1.2rem;

	@media (max-width: 768px) {
		width: 100%;
		margin: auto;
	}
}

.form_fields button {
	border: none;
	background-color: v.$main-blue;
	color: white;
	margin: auto;
	padding: 0.7rem;
	cursor: pointer;
	transition: 0.5s;
	border-radius: 5px;
}

.form_fields button:hover {
	background-color: v.$dark-blue;
}
.form_fields:hover {
	opacity: 0.9;
	transition: 0.5s;
}
</style>
