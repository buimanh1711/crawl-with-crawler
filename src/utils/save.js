const Model = require("../config/model");

async function save(address) {
  try {
    const result = await Model.create({ address });
    if (!result) return false;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = save;
