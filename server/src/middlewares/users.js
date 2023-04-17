module.exports = {
  validateRegister: (req, res, next) => {
    // username min length 3
    // if (!req.email.nome) {
    //   return res.status(400).send({
    //     msg: 'Por favor, insira um usuário com mais de 3 caracteres'
    //   });
    // }
    // password min 6 chars
    if (!req.body.usuario.senha || req.body.usuario.senha.length < 6) {
      return res.status(400).json({
        msg: 'Por favor, insira uma senha com mais de 6 caracteres'
      });
    }
    next();
  }
};
