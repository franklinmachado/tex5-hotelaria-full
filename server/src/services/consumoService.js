const db = require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM consumo', (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

    insert: ( item, valor, local, qtd_item, data_hora, id_reserva ) => {
        return new Promise ((resolve, reject) => {
            db.query(
                `
                INSERT INTO consumo (
                    item,
                    valor,
                    local,
                    qtd_item,
                    data_hora,
                    id_reserva
                ) VALUES (?, ?, ?, ?, ?, ?)
                `,[item,valor,local,qtd_item,data_hora, id_reserva],
                (err,result) => {
                    if(err) {
                        reject(err)
                        return
                    } else {
                        resolve(result.insertId)
                        return
                    }
                }
            )
        })
    },

    update: (item,valor,local,qtd_item,data_hora, id_reserva, id_consumo) => {
        return new Promise((resolve, reject) => {
            db.query(`
            UPDATE consumo
            SET item = ?,
                valor = ?,
                local = ?,
                qtd_item = ?,
                data_hora = ?, 
                id_reserva = ?
            WHERE id_consumo = ?`,
            [item,valor,local,qtd_item,data_hora,id_reserva,id_consumo],
            ((erro, res)=> {
                if(erro){
                    reject(erro)
                    return
                }
                resolve(res)
                return
            })
            )
        })
    }
}