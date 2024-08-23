const express = require('express');
const morgan = require('morgan')

const app = express();

const PORT = process.env.PORT || 3000

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${3000}`)
})