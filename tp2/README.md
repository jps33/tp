# TP2: API pour le stockage de produits en RAM

Vous allez durant ce TP réaliser votre première API REST.
Cette API devra permettre de récupérer/ajouter/modifier/supprimer des produits qui seront sauvegardés dans un tableau en mémoire.

## Sujet

Un produit n'est autre qu'un objet possédant deux attributs: un nom, un prix.
Les différents endpoints de l'API seront comme suit:

* GET http://localhost:3000/products (Aucun paramètre à passer)
* POST http://localhost:3000/products (Les valeurs pour créer le produit seront passés dans la query string)
* PUT http://localhost:3000/products/1 (Les valeurs à mettre à jour sont passés dans la query string)
* PATCH http://localhost:3000/products/1 (Les valeurs à mettre à jour sont passés dans la query string)
* DELETE http://localhost:3000/products/1 (Aucun paramètre supplémentaire à passer en dehors de l'identifiant)

Voici le squelette de l'application:

~~~ javascript
const express = require("express")
const app = express()

const products = []

//
// Vos routes
//

app.listen(3000, () => {
  console.log("En attente de requêtes...")
})
~~~

Pour pouvoir commencer, vous aurez besoin de télécharger les différentes dépendances du projet.
N’oubliez pas également de faire votre `npm init` et de modifier votre `package.json` pour utiliser nodemon:

~~~ shell
npm init
npm install express --save
npm install nodemon —-save
~~~

