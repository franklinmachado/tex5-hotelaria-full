const ConsumoService = require('../services/consumoService.js')

module.exports = {
    getAll: async (require, response) => {
        const data = []
        const consumo = await ConsumoService.getAll()

        for(const i in consumo) {
            data.push(consumo[i])
        }
        response.send(data)
    },

    insert: async (req, res) => {
        const { item, valor, local, qtd_item, data_hora, id_reserva } = req.body

        try {
            const id  =  await ConsumoService.insert(
                item,
                valor,
                local,
                qtd_item,
                data_hora,
                id_reserva
            )
            const consumo = {
                item,
                valor,
                local,
                qtd_item,
                data_hora,
                id_reserva,
                consumoId: id
            }
            res.send(consumo)
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        const { item,valor,local,qtd_item,data_hora, id_reserva } = req.body
        const { id_consumo } = req.params

        try {
            
            await ConsumoService.update(
                item,
                valor,
                local,
                qtd_item,
                data_hora,
                id_reserva,
                id_consumo
            )

            const consumo = {
                item,
                valor,
                local,
                qtd_item,
                data_hora,
                id_reserva,
                id_consumo
            }
            res.send(consumo)

        } catch (error) {
            console.log(error);
        }
    }
}