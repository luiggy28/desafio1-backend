const fs = require('fs')
const path = require('path')

let date = new Date()

let dateString = date.toString()

let filePath = path.join(__dirname, 'date.txt')

fs.writeFile(filePath, dateString, (error) => {
    if (error) throw error
    console.log('Archivo creado')

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) throw error
        console.log(data)
    })
})