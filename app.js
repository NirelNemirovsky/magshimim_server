const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// gets the audio file from mobile
app.post('/audio', (req, res) =>

)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
