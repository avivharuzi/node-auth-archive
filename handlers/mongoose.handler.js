const models = require('./../models/index');

class MongooseHandler {
  static checkIfAlreadyExist(model, field, value) {
    return new Promise((resolve, reject) => {
      models[model].findOne({
          [field]: value
        })
        .then((result) => {
          if (result) {
            reject([`This ${field} is already in used`]);
          } else {
            resolve();
          }
        })
        .catch(reject);
    });
  }
}

module.exports = MongooseHandler;
