const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')

// history between requests and static files to catch client-side route paths
app.use(history())

// serving index.html and chunks, client-side routes handled by Vue router and history
app.use(express.static('./dist'))


app.listen(3000, () => console.log(`Example app listening on port 3000!`))
