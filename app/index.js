const mongoose = require('mongoose')

const host = process.env.MONGO_HOST
const db = process.env.MONGO_DB

mongoose.connect(`mongodb://${host}/${db}`, err => {
  if (err) {
    console.error('Could not connect to database', cnnstr)
    process.exit(1)
  }

  console.log('Connected to mongodb!')

  mongoose.disconnect(() => {
    console.log('Disconnected from mongodb')
  })
})

