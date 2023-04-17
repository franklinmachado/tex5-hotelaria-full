<template>
	<div class="main_content">
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>CPF</th>
						<th>Email</th>
						<th>Telefone</th>
						<th>Estado</th>
						<th>Cidade</th>
						<th>Bairro</th>
						<th>Rua</th>
						<th>Número</th>
						<th>Complemento</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="usuario in listaDeUsuarios" :key="usuario.id_usuario">
						<td>{{ usuario.id_usuario }}</td>
						<td>{{ usuario.nome }}</td>
						<td>{{ usuario.cpf }}</td>
						<td>{{ usuario.email }}</td>
						<td>{{ usuario.telefone }}</td>
						<td> {{usuario.estado}} </td>
						<td> {{usuario.cidade}} </td>
						<td> {{usuario.bairro}} </td>
						<td> {{usuario.rua}} </td>
						<td> {{usuario.numero}} </td>
						<td> {{usuario.complemento}} </td>
						<td><button @click="editarUsuario(usuario)">Editar</button></td>
						<td><a href="#">Excluir</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'AdminUsuariosView.vue',
	data() {
		return {
			listaDeUsuarios: '',
			form: {
				id_usuario: '',
				nome: '',
				telefone: '',
				cpf: '',
				email: '',
				senha: '',
				id_endereco: '',
				cidade: '',
				estado: '',
				numero: '',
				rua: '',
				bairro: '',
				complemento: '',
			},
		};
	},

	methods: {
		//Método que busca os usuarios.
		async getData() {
  			await axios.get('http://localhost:3000/api/usuariosLista')
				.then(res => this.listaDeUsuarios = res.data)
				.catch(error => console.log(error));
		},
		//Método que envia parametros para edição.
		editarUsuario(usuario) {
  			this.$router.push({ name:'editar-usuario',
			params: {
				id: usuario.id_usuario,
				nome: usuario.nome,
				telefone: usuario.telefone,
				cpf: usuario.cpf,
				email: usuario.email,
				senha: usuario.senha,
				cidade: usuario.cidade,
				estado: usuario.estado,
				numero: usuario.numero,
				rua: usuario.rua,
				bairro: usuario.bairro,
				complemento: usuario.complemento
			}});
		}		
	},

	mounted() {
		this.getData();
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
@import '../sass/components/tables.scss';
</style>
