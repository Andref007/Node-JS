const byteToMb = bytes => bytes / 1024 / 1024

const byteToGb = bytes => bytes / 1024 / 1024 / 1024


module.exports = { byteToGb, byteToMb}


// O module.exports permite exportar as funções para que sejam visíveis em outro arquivo, permitindo a reutilização e evitando repetição de código.