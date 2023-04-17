const AvaliacoesService = require('../services/avaliacoesService.js')

module.exports = {
    getAll: async (req,res) => {
        const data = []
        const avaliacoes = await AvaliacoesService.getAll()

        for (const i in avaliacoes) {
            data.push(avaliacoes[i])
        }
        res.send(data)
    },

    insert: async (req, res) => {
        const  { data_avaliacao, pontuacao, descricao,
        status, id_acomodacao, id_usuario } = req.body

        try {
            const id = await AvaliacoesService.insert(
                data_avaliacao,
                pontuacao,
                descricao,
                status,
                id_acomodacao,
                id_usuario
            )
            const avaliacao = {
                data_avaliacao,
                pontuacao,
                descricao,
                status,id_acomodacao,
                id_usuario,
                avaliacaoId: id
            }
            res.send(avaliacao)

        } catch (error) {
            console.log(error);
        }
    }, 

    update: async (req, res) => {
        const {data_avaliacao, pontuacao, descricao,
        status, id_acomodacao, id_usuario} = req.body
        const { id_avaliacao } = req.params
        
        try {
            
            await AvaliacoesService.update(
                data_avaliacao,
                pontuacao,
                descricao,
                status,
                id_acomodacao,
                id_usuario,
                id_avaliacao
            )

            const avaliacao = {
                data_avaliacao,
                pontuacao,
                descricao,
                status,
                id_acomodacao,
                id_usuario,
                id_avaliacao
            }
            res.send(avaliacao)
            
        } catch (error) {
            console.log(error);
        }
    }
}