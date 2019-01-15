const faker = require('faker/locale/fr');

// TODO: générer des utilisateurs, ajouter en parametres le nombres de user
userGenerator = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
  }
}

module.exports = {
  userGenerator,
}