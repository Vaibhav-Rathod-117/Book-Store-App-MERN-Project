const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173/',
  credential: true
}))

//routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)

// user=vaibhavshreeramrathod474
// pass=NMKB8ijiLnZW6gCR

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
      res.send('Welcome to server Vaibhav Rathod!')
    })
  }

main().then(() => console.log("Mongodb connect successfully")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})