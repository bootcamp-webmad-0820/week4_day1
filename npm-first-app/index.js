const chalk = require('chalk')
const faker = require('faker')

const randomName = faker.name.findName()
const redText = chalk.bgBlue(randomName)

console.log(redText)
