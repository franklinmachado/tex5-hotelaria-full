const UsuariosListaService = require('../services/usuariosListaService.js');

module.exports = {
    getAll: async (req, res) => {
        const data = [];
        const usuarios = await UsuariosListaService.getAll();
        
        for (const key in usuarios) {
            data.push(usuarios[key]);
        }
        res.send(data);
    },

    getById: async (req, res) => {
        const { id } = req.params
        const usuarios = await UsuariosListaService.getById(id);
        
        res.send(usuarios);
    },

    update: async (req, res) => {
        const { nome, telefone, cpf, email, senha, cidade, estado, numero,rua, bairro, complemento } = req.body;
        const { id_usuario } = req.params;

        try {
            
            await UsuariosListaService.update(
                nome,
                telefone,
                cpf,
                email,
                senha,
                cidade,
                estado,
                numero,
                rua,
                bairro,
                complemento,
                id_usuario
            )

            const usuarioListaAdd = {
                nome,
                telefone,
                cpf,
                email,
                senha,
                cidade,
                estado,
                numero,
                rua,
                bairro,
                complemento,
                id_usuario
            }
            res.send(usuarioListaAdd);

        } catch (error) {
            console.log(error);
        }
    }
}