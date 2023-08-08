const express = require('express')

const app = express()
app.disabled('x-powered-by') // Desactivar el header que muestra la información del framework

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status(200).send('Aqui mero')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
