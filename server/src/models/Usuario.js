const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcryptjs'));

function hashPassword (usuario, options) {
    const SALT_FACTOR = 8;

    if(!usuario.changed('senha')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(usuario.senha, salt, null))
        .then(hash => {
            usuario.setDataValue('senha', hash)
        })
}

module.exports = () => {
    User.prototype.comparePassword = function (senha) {
        return bcrypt.compareAsync(senha, this.senha)
    }
}