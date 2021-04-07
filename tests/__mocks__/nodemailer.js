const sendMail = () => {}

const createTransport = () => {
    return {sendMail}
}

module.exports = {
    createTransport
}