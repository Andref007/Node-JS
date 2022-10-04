//commonJS -> Responsável por importar ou exportar os módulos
// importando o módulo OS do node e colocandoem uma variável
const os = require('os')
const { byteToGb } = require('../aula-02/convertUnitStorage')
const fs = require('fs')
// const { byteToMb } = require('../aula-02/convertUnitStorage')



setInterval(() => {
    const freeMem = parseFloat(byteToGb(os.totalmem())).toFixed(2)
    const totalMem = parseFloat(byteToGb(os.freemem())).toFixed(2)
    const percent = parseInt((freeMem / totalMem) * 100)


    const memoria = {
        total: `${totalMem} GB`,
        free: `${freeMem} GB`,
        percent: `${percent} % `
    }

    let print = `${JSON.stringify(memoria)}\n`

    console.clear()
    console.table(memoria)
    fs.appendFile('./aula-02/log.txt',
        print,
        'utf8',
        () => console.log('Log inserido'))
}, 1000)


//  o módulo OS está dentro da variável OS, desta forma conseguimos acessar as propriedades
// e métodos desde , míodulo/objeto

// console.log(`Memória livre: ${freeMem}`, ` Memória Total: ${totalMem}`)






