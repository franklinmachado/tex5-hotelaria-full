<template>
		<div>
			<section>
				<div>
					<legend>Editar Serviço</legend>
					<p v-show="messageState">{{ message }}</p>
					<form 
						enctype="multipart/form-data"
						@submit.prevent="updateData()"
					>
						<div>
							<label for="nome"></label>
							<input
								type="text"
								name="nome"
								id="nome"
								placeholder="Nome"
								v-model="form.nome"
                                
							/>
						</div>
						<div>
							<label for="telefone"></label>
							<input
								type="text"
								name="telefone"
								id="telefone"
								placeholder="Telefone"
								v-model="form.telefone"
                                
							/>
						</div>
						<div>
							<label for="cpf"></label>
							<input
								type="text"
								name="cpf"
								id="cpf"
								placeholder="CPF"
								v-model="form.cpf"
                                
							/>
						</div>
                        <div>
							<label for="email"></label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="E-mail"
								v-model="form.email"
                                required
							/>
						</div>
                        <div>
							<label for="senha"></label>
							<input
								type="text"
								name="senha"
								id="senha"
								placeholder="Senha"
								v-model="form.senha"
                                required
							/>
						</div>
                        <div>
							<label for="cidade"></label>
							<input
								type="text"
								name="cidade"
								id="cidade"
								placeholder="Cidade"
								v-model="form.cidade"
                                required
							/>
						</div>
                        <div>
							<label for="estado"></label>
							<input
								type="text"
								name="estado"
								id="estado"
								placeholder="Estado"
								v-model="form.estado"
                                required
							/>
						</div>
                        <div>
							<label for="numero"></label>
							<input
								type="number"
								name="numero"
								id="numero"
								placeholder="Número"
								v-model="form.numero"
                                required
							/>
						</div>
                        <div>
							<label for="rua"></label>
							<input
								type="text"
								name="rua"
								id="rua"
								placeholder="Rua"
								v-model="form.rua"
                                required
							/>
						</div>
                        <div>
							<label for="bairro"></label>
							<input
								type="text"
								name="bairro"
								id="bairro"
								placeholder="Bairro"
								v-model="form.bairro"
                                required
							/>
						</div>
                        <div>
							<label for="complemento"></label>
							<input
								type="text"
								name="complemento"
								id="complemento"
								placeholder="Complemento"
								v-model="form.complemento"
                                required
							/>
						</div>
						<button type="submit">Salvar</button>
						<button @click.prevent="resetData()">Cancelar</button>
					</form>
				</div>
			</section>
		</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                id_usuario: this.$route.params.id,
				nome: this.$route.params.nome,
				telefone: this.$route.params.telefone,
				cpf: this.$route.params.cpf,
				email: this.$route.params.email,
				senha: '',
				cidade: this.$route.params.cidade,
				estado: this.$route.params.estado,
				numero: this.$route.params.numero,
				rua: this.$route.params.rua,
				bairro: this.$route.params.bairro,
				complemento: this.$route.params.complemento
            },
			id:this.$route.params.id_usuario,
			message:'',
			messageState: false
        }
    },

    methods: {

		updateData() {
            const erros = []
            try {
                if(nome.value.length < 2 ) erros.push('Nome');
                if(telefone.value.length <= 9 || telefone.value.length > 17) erros.push('Telefone');
                if(this.checkCpf(cpf.value) === false) erros.push('CPF');
                if(this.isValidEmail(email.value) === false) erros.push('E-mail');
				if(senha.value.length < 6) erros.push('Senha');
				if(erros.length > 0) {
					this.messageState = true
					erros.forEach(element => {
						erros.length === 0 ? (this.message = `${erros[0]} apresenta um erro.`):(this.message = `${erros.join(', ')} inválidos.`)
					});
				}
				if(erros.length === 0 ) {
					axios.put(`http://localhost:3000/api/usuariosLista/${this.form.id_usuario}`, this.form);
            		this.$router.back();
				}
			} catch (error) {
                console.log(error);
            }
		},

        isValidEmail(email) {
            // Expressão regular para validação de email
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        checkCpf(cpf) {
            cpf = cpf.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos
			if(this.checkEqualNumbers(cpf) === true) {
				return false;
			};
            if (cpf.length !== 11 || /^\d{11}$/.test(cpf) === false) {
              return false; // O CPF deve ter exatamente 11 dígitos
            }
            // Calcula o primeiro dígito verificador
            let soma = 0;
            for (let i = 0; i < 9; i++) {
              soma += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let resto = (soma * 10) % 11;
            let digitoVerificador1 = resto === 10 ? 0 : resto;
            // Calcula o segundo dígito verificador
            soma = 0;
            for (let i = 0; i < 10; i++) {
              soma += parseInt(cpf.charAt(i)) * (11 - i);
            }
            resto = (soma * 10) % 11;
            let digitoVerificador2 = resto === 10 ? 0 : resto;
            // Verifica se os dígitos verificadores são válidos
            if (digitoVerificador1 !== parseInt(cpf.charAt(9)) || digitoVerificador2 !== parseInt(cpf.charAt(10))) {
				return false;
            }
            return true; // O CPF é válido
        },

		checkEqualNumbers(cpf) {

			let cpfArr = cpf.split('')
			const result = cpfArr.every((digito, index) => {
				return digito === cpf.charAt(0)
			})
			return result;
		}
    },
}
</script>