

const os = require('os')
const fs = require('fs')
const path = require('path')

const userInfo = os.userInfo()

fs.appendFile('./aula-04/user.txt', JSON.stringify(userInfo), () => console.log('Info escrita no arquivo'))


console.log(path.join(__dirname,'user.txt'))

// console.log(os.userInfo());
// console.log(`User Info: ${JSON.stringify(userInfo)}`);
