const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.Port || 5000

app.use(cors());

const categories = require('./data/categories.json')

app.get('/' , (req , res) => {
    res.send('New Api running')
})

app.get('/news-categories' , (req , res) => {
    res.send(categories )
})

app.listen(port, ( port , () =>{
    console.log('Dragon News Server running on port  ' , port);
}))