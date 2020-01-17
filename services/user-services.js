const models = require('../models');


module.exports = {
  createUser: async (req) => {
    return await models.user.create(req.body)
  }
};
