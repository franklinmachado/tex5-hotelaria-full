<template>
	<div>
		<button class="resume__addService" @click="showModal = true">
			▶ Adicionar mais serviços
		</button>
		<div v-if="showModal" @click="showModal = false">
			<div class="modal-content" @click.stop>
				<ul>
					<li v-for="servico in servicosAdicionais" :key="servico.id_servico_adicional">
						<input
							type="checkbox"
							v-model="servico.selected"
							:id="servico.id_servico_adicional"
							:value="servico.id_servico_adicional"
							:checked="dadosReserva.servicosAdicionais[servico.id_servico_adicional]"
							name="additionalServices"
							class="customize yellow"
							@change="handleInputChange($event)"
						/>
						{{ servico.item }} - R$ {{ servico.valor }}
					</li>
				</ul>
				<button @click="showModal = false">Fechar</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {
	name: 'AditionalServicesModal',
	data() {
		return {
			showModal: false,
			servicosAdicionais: [],
		};
	},
	computed: {
		...mapGetters(['dadosReserva']),
		selectedItems() {
			return this.servicosAdicionais.filter((item) => item.selected);
		},
		totalAditionalServices() {
			return this.selectedItems.reduce((acc, item) => acc + item.price, 0);
		},
	},
	methods: {
		...mapActions(['handleInputChange']),
	},
	mounted: function () {
		axios
			.get('http://localhost:3000/api/servicosAdicionais')
			.then((res) => {
				this.servicosAdicionais = res.data;
			})
	}
};
</script>

<style lang="scss" scoped>
$main-blue: hsla(212, 29%, 36%, 1);
$light-gray: #f0f0eeff;
$yellow: #e3bb00ff;
$light-yellow: #eacc40ff;
.modal-content {
	background-color: hsl(212, 29%, 36%);
	color: #f0f0ee;
	padding: 1rem;
	box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
	border-radius: 10px;
	position: relative;

	ul {
		padding: 0;
		line-height: 2rem;
		margin-bottom: 0;
	}

	button {
		padding: 0.5rem;
		width: 50%;
	}
}

.resume__addService {
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 700;
	color: #e3bb00ff;
	cursor: pointer;
	background: none;
	border: none;
}

.resume__titleAddServices {
	text-align: center;
	margin: 1rem 0;
}

.resume__listItem {
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.5rem;
}

button {
	background-color: $light-yellow;
	color: $main-blue;
	padding: 0.3rem 1rem;
	margin-top: 0.5rem;
	cursor: pointer;
	font-weight: 600;
	border: none;
	border-radius: 0.5rem;
}

.customize {
	all: unset;
	position: relative;
	display: inline-block;
	border: dashed 1px #ccc;
	width: 15px;
	height: 15px;
	background: #eee;
	cursor: pointer;
}

.customize:checked {
	border: dashed 1px transparent;
}

.customize:checked::after {
	content: '';
	position: absolute;
	width: 12px;
	height: 12px;
	left: calc(50% - 6px);
	top: calc(50% - 6px);
	border-radius: 50%;
}

.customize.yellow:checked {
	background: $light-yellow;
}
.customize.yellow:checked::after {
	background: $yellow;
}
</style>
