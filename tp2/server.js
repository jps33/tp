var express = require("express")
var app = express()

// npm install
// npm start

// npm install body-parser
const bodyParser = require("body-parser")
// Content-type: application/json
app.use(bodyParser.json())
// Content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))





var products = []

// (Récupérer)
// get a product by id
// curl -X GET http://127.0.0.1:3000/products/1
app.get("/products/:id", function(req, res) {
  console.log('req.params=',req.params) // { id: '321' }
  console.log('req.params.id=',req.params.id) // 321
  console.log('GET(id)=')
  console.log('req.query.id=',req.query.id) // undefined
  console.log('req.query=',req.query) // {}
  console.log('req.body=',req.body) // undefined

  res.json(products[req.params.id])
})

// (Mettre à jour)
// update a product (name or price) by id 
// curl -X PUT http://127.0.0.1:3000/products/1 
app.patch("/products/:id", function(req, res) {
  if(req.query.name) {
    products[req.params.id]["name"] = req.query.name
  }

  if(req.query.price) {
    products[req.params.id]["price"] = req.query.price
  }

  res.json(products[req.params.id])
})

// (Effacer)
// remove a product by id
// curl -X DELETE http://127.0.0.1:3000/products/0 
app.delete("/products/:id", function(req, res) {
  products[req.params.id] = {}
  res.json(req.params.id)
})

// (Créer)
// post a product by name and price
// curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'name=JP' -d 'price=55' http://127.0.0.1:3000/products
// curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'name=MICHEL&price=33' http://127.0.0.1:3000/products
// curl -X POST -H 'Content-Type: application/json' -d '{"name":"LEA","price":"33"}' http://127.0.0.1:3000/products
// curl -X POST -H 'Content-Type: application/json' -d @monFichier.json http://127.0.0.1:3000/products
// curl -X POST -H 'Content-Type: application/json' -d "$(cat ./mon.json)" http://127.0.0.1:3000/products
app.post("/products", function(req, res) {
  console.log('POST=')
  console.log('req.query.name=',req.query.name)
  console.log('req.query=',req.query)
  console.log('req.params=',req.params)
  console.log('req.body=',req.body)
  console.log('req.body=',req.body.name)
  product = {
    name: req.body.name,
    price: req.body.price
  }

  products[products.length] = product

  res.status(201).json(product)
})

// (Récupérer)
// get all products
// curl -X GET http://127.0.0.1:3000/products
app.get("/products", function(req, res) {
  console.log('GET=')
  console.log('req.query.name=',req.query.name)
  console.log('req.query=',req.query)
  console.log('req.params=',req.params)
  console.log('req.body=',req.body)
  res.json(products)
})

app.listen(3000, () => {
  console.log("En attente de requêtes...")
})

