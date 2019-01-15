const faker = require('faker/locale/fr');

// TODO: générer des utilisateurs, ajouter en parametres le nombres de user
userGenerator = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
  }
}

usersGenerator = () => {
  const users = [];
  for (let index = 0; index < 40; index++) {
    users.push(userGenerator());
  }
  return users;
}

module.exports = {
  userGenerator,
  usersGenerator,
}