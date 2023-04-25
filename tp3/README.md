# TP3: API pour le stockage de produits avec persistence

Cette fois-ci en plus de réaliser notre API REST, nous allons également faire persister les données que l'on reçoit dans une BDD.
Notre API permettra donc de la même manière que celle du TP3 de récupérer/ajouter/modifier/supprimer des produits qui cette fois seront sauvegardés dans une collection MongoDB.

## Sujet 

Toujours comme dans le TP2, un produit n'est rien d'autre qu'un objet possédant deux attributs: un nom et un prix.

Les différents endpoints de l'API sont les suivants:

* GET http://localhost:3000/products (Aucun paramètre à passer)
* POST http://localhost:3000/products (Les valeurs pour créer le produit seront passés dans le body cette fois)
* PUT http://localhost:3000/products/5abe4657f5ff2b223adfadb3 (Permet de mettre à jour le nom et prix en même temps, les valeurs sont passés dans le body de la requête)
* PATCH http://localhost:3000/products/5abe4657f5ff2b223adfadb3 (Permet de mettre soit le nom, soit le prix, les valeurs seront passées dans le body de la rêquete)
* DELETE http://localhost:3000/products/5abe4657f5ff2b223adfadb3 (Aucun paramètre supplémentaire à passer en dehors de l'identifiant)

Vous l'aurez remarqué, cette fois-ci l'identifiant change, désormais ca sera le même identifiant que celui dans la collection.

Voici le squelette de l'application:

~~~ javascript
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

// On ouvre une connexion à notre base de données
MongoClient.connect(url)
  // On commence par récupérer la collection que l'on va utiliser et la passer
  .then(function (client) {
    return client.db("products_manager").collection("products");
  })
  .then((products) => {
    // Rajouter vos routes et les traitements

    app.listen(3000, () => {
      console.log("En attente de requêtes...");
    })
  })
  .catch(function (err) {
    throw err;
  });
~~~

Pour pouvoir commencer, vous devez installer les différentes dépendances du projet à l'aide de npm.
N’oubliez pas également de faire votre `npm init` et de modifier votre `package.json` pour utiliser nodemon:

~~~ shell
npm init
npm install express --save
npm install body-parser --save
npm install nodemon —-save
npm install mongodb —-save
~~~
