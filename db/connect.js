//const connectionString = 'mongodb+srv://karwood:Carls6erg21@cluster0.ksqlb.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

//const connectionString = 'mongodb://localhost:27017'

const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB