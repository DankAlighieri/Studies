// Uma factory retorna um novo objeto

module.exports = () => {
    return {
        vcalor: 1,
        inc() {
            valor++
        }
    }
}