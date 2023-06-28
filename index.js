
const express = require("express")
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger')


const app = express()
const PORT = 3000








app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// app.get('/', (req, res) => {
//     res.send('Welcome to the API!');
//   });
  

app.listen(PORT , () => {
console.log(`server running ${PORT} `)
})