import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './users/routes.js'
dotenv.config()

const app= express()
const port= process.env.PORT

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.use(express.json())

app.use('/users', UserRoutes)