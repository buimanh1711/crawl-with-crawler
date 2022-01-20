const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connect db successfully!");
  } catch (error) {
    console.log("Connect db failed!", error);
  }
};

const disconnect = async (cb) => {
  await mongoose.connection.close(null, cb && cb());
};

export default { connect, disconnect };
