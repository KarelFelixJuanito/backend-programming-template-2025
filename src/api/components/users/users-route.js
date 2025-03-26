const express = require('express');

const usersController = require('./users-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  // Get list of users
  route.get('/', (req, res, next) => usersController.getUsers(req, res, next));

  // Create a new user
  route.post('/', usersController.createUser);

  // Get user detail
  route.get('/:id', usersController.getUser);

  // Update user
  route.put('/:id', usersController.updateUser);

  // Change password
  route.put('/:id/change-password', usersController.changePassword);

  // Authentication User
  route.get('/authentication/login', usersController.aunthenticationUser);

  // Delete user
  route.delete('/:id', usersController.deleteUser);
};
