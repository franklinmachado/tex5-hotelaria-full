<template>
	<div>
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
							<label for="item"></label>
							<input
								type="text"
								name="item"
								id="item"
								placeholder="Item"
								v-model="form.item"
							/>
						</div>
						<div>
							<label for="descricao"></label>
							<input
								type="text"
								name="descricao"
								id="descricao"
								placeholder="Descricao do produto"
								v-model="form.descricao"
							/>
						</div>
						<div>
							<label for="valor"></label>
							<input
								type="text"
								name="valor"
								id="valor"
								placeholder="Valor do produto"
								v-model="form.valor"
							/>
						</div>
						<button type="submit">Atualizar</button>
						<button @click.prevent="resetData()">Resetar</button>
					</form>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                id_servico_adicional: this.$route.params.id,
                item: this.$route.params.item,
                descricao: this.$route.params.descricao,
                valor: this.$route.params.valor,
            },
			message:'',
			messageState: false
        }
    },

    methods: {
		updateData() {
			this.messageState = false
			let messageError = [];
			try {
				if ( typeof item.value !== 'string' || item.value.length === 0 ) messageError.push('Item') ;
				if ( typeof descricao.value !== 'string' || descricao.value.length === 0 ) messageError.push('Descrição');
				if ( typeof valor.value !== 'string' || valor.value.length === 0) messageError.push('Valor');
				if ( messageError.length > 0 ) {
					this.messageState = true
					messageError.forEach(element => {
						if (messageError.length === 1 ) {
							this.message = `O campo ${messageError[0]} inválido`;
						} else {
							this.message = `Os campos ${messageError.join(', ')} apresentam erros, verifique novamente!`
						}
					});
				}
				if (messageError.length === 0) {
					axios.put(`http://localhost:3000/api/servicosAdicionais/${this.form.id_servico_adicional}`, this.form)
					this.$router.back();		
				}
				} catch (error) {
					console.log(error);
				}
			},

		resetData() {
			this.messageState = false
			try {
				location.reload()
				this.messageState = true;
				this.message = 'Campos resetados!'
			} catch (error) {
				console.log(error);
			}
		},
    },

	mounted () {
		
	}
}
</script>