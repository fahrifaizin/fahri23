const express = require('express')
const app = express()
const port = 3001
 
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send('this is about page!')
})

app.get('/contact', (req, res) => {
    res.send('this is about contact!')
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found : 404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})