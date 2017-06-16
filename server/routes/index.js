
  const users = require('../controllers').users;
  const groups = require('../controllers').groups;
  //const addusers = require('../controllers').groups;

 module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to my APP!',
  }));

 app.post('/api/users', users.create);
 app.post('/api/groups', groups.create);
};