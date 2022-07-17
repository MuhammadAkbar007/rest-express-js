import express from 'express' /* add "type = module" in package.json */
// const express = require('express')
import bodyParser from 'body-parser' /* to parse body JSON */
import usersRouter from './routes/users.js'

const PORT = 5000
const app = express()

app.use(bodyParser.json()) /* declaring Data-Type is JSON */

app.listen(PORT, () => console.log(`Server has been started on port: http://localhost:${PORT}`))

app.get('/', (req, res) => res.send('Welcome Home Page !'))

app.use('/users', usersRouter) /* /users use usersRoutes */