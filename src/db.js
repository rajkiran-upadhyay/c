const { connect } = require("mongoose")

const connectDb = async () => {
  const URL=`mongodb://user:codeforraj@ac-5xhu9ea-shard-00-00.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-01.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-02.zxbs9np.mongodb.net:27017/?ssl=true&replicaSet=atlas-ctj0dh-shard-0&authSource=admin&retryWrites=true&w=majority`;
  // return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
   return connect(URL,{useNewUrlParser:true})
}

module.exports = { connectDb }
