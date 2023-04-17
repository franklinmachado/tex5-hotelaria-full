const AcomodacaoService = require('../services/acomodacoesService');

class Reserva {
	check_in = null;
	check_out = null;
	quantidade_pessoas = null;
	total = null;
	total_desconto = null;
	confirmacao = 0;
	data_confirmacao = null;
	id_cupom = null;
	id_acomodacao = null;
	id_usuario = null;

	constructor(data) {
		this.check_in = data.check_in;
		this.check_out = data.check_out;
		this.quantidade_pessoas = Number(data.quantidade_pessoas);
		this.id_cupom = data.id_cupom ?? null;
		this.id_usuario = data.id_usuario;
		this.id_acomodacao = data.id_acomodacao;
	}

	async getAcomodacao() {
		const [acomodacao] = await AcomodacaoService.getById(this.id_acomodacao);
		return acomodacao;
	}

	calculaTotalReserva(acomodacao, check_in, check_out) {
		return acomodacao.preco * this.calculaTotalDeDias(check_in, check_out);
	}

	calculaTotalDesconto(totalReserva, desconto) {
		return totalReserva * desconto;
	}

	async criarReserva() {
		const acomodacao = await this.getAcomodacao();
		const totalReserva = this.calculaTotalReserva(
			acomodacao,
			this.check_in,
			this.check_out
		);
		const totalDesconto = 0;
		const reserva = {
			check_in: this.check_in,
			check_out: this.check_out,
			quantidade_pessoas: this.quantidade_pessoas,
			total: totalReserva,
			total_desconto: totalDesconto,
			id_cupom: this.id_cupom,
			id_acomodacao: this.id_acomodacao,
			id_usuario: this.id_usuario,
		};

		return reserva;
	}

	calculaTotalDeDias(checkIn, checkOut) {
		const diferencaEmMs =
			new Date(checkOut).valueOf() - new Date(checkIn).valueOf();
		const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
		return diferencaEmDias;
	}
}

module.exports = Reserva;
