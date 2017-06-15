
const groups = require('../models').groups;

module.exports = {
  create(req, res) {
    return groups
      .create({
        username_of_creator: req.body.username_of_creator,
        group: req.body.group,
      })
      
      .then(groups => res.status(201).send(groups))
      .catch(error => res.status(400).send(error));

 },
};