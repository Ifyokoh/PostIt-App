
const users = require('../models').users;

module.exports = {
  create(req, res) {
    return users
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })

      
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));

 },
};