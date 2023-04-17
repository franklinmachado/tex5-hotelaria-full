const db = require('../db')

module.exports = {
    getAll: () => {
        return new Promise ((resolve, reject) => {
            db.query('SELECT * FROM avaliacoes', (err,res) => {
                if(err) {
                    reject(err)
                    return
                }
                resolve(res)
            })
        })
    },

    insert: (data_avaliacao, pontuacao, descricao, status, id_acomodacao, id_usuario) => {
        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO avaliacoes (
                data_avaliacao,
                pontuacao,
                descricao,
                status,
                id_acomodacao,
                id_usuario
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [data_avaliacao,pontuacao,descricao,status,id_acomodacao,id_usuario],
            (err,res) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(res)
                return
            })
        })
    },

    update: (data_avaliacao, pontuacao, descricao, status, id_acomodacao, id_usuario, id_avaliacao ) => {
        return new Promise ((resolve, reject) => {
            db.query(`
            UPDATE avaliacoes
            SET data_avaliacao = ?,
                pontuacao = ?,
                descricao = ?,
                status = ?,
                id_acomodacao = ?,
                id_usuario = ?
            WHERE id_avaliacao = ?`,
            [data_avaliacao, pontuacao, descricao, status, id_acomodacao, id_usuario, id_avaliacao],
            ((erro,result) => {
                if(erro) {
                    reject(erro)
                    return
                }
                resolve(result)
            })
            )
        })
    }
}