//commonJS -> Responsável por importar ou exportar os módulos
// importando o módulo OS do node e colocandoem uma variável
const os = require('os')


//  o módulo OS está dentro da variável OS, desta forma conseguimos acessar as propriedades
// e métodos desde , míodulo/objeto
const freeMem = parseInt(os.freemem() / 1024 / 1024) 
const totalMem = parseInt(os.totalmem() / 1024 / 1024)

// console.log(`Memória livre: ${freeMem}`, ` Memória Total: ${totalMem}`)



const memoria = {
    total: `${totalMem} MB`,
    free: `${freeMem} MB`
}

console.clear()
console.table(memoria)