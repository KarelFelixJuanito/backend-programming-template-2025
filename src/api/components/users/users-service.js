const usersRepository = require('./users-repository');

async function getUsers(offset = 0, limit = 20) {
  return usersRepository.getUsers(offset, limit);
}

async function getUser(id) {
  return usersRepository.getUser(id);
}

async function emailExists(email) {
  const user = await usersRepository.getUserByEmail(email);
  return !!user; // Return true if user exists, false otherwise
}

async function createUser(email, password, fullName) {
  return usersRepository.createUser(email, password, fullName);
}

async function updateUser(id, email, fullName) {
  return usersRepository.updateUser(id, email, fullName);
}

async function aunthenticationUser(email, password) {
  return usersRepository.aunthenticationUser(email, password)
}

async function deleteUser(id) {
  return usersRepository.deleteUser(id);
}

module.exports = {
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
  aunthenticationUser,
  deleteUser,
};
