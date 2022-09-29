//commonJS -> Responsável por importar ou exportar os módulos
// importando o módulo OS do node e colocandoem uma variável
const os = require('os')


setInterval(() => {
    const freeMem = parseInt(os.freemem() / 1024 / 1024)
    const totalMem = parseInt(os.totalmem() / 1024 / 1024)
    const percent = parseInt((freeMem / totalMem) * 100)
    const memoria = {
        total: `${totalMem} MB`,
        free: `${freeMem} MB`,
        percent: `${percent} % `
    }

    console.clear()
    console.table(memoria)
}, 1000)


//  o módulo OS está dentro da variável OS, desta forma conseguimos acessar as propriedades
// e métodos desde , míodulo/objeto

// console.log(`Memória livre: ${freeMem}`, ` Memória Total: ${totalMem}`)






