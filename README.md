# stock-graphql

````
yarn
````

````
yarn start
````

## Doc Graphql

### search all products

````
{
  products {
    id
    name
    stock
    code
  }
}
````

### Search specific product

````
{
  product(id: ID) {
    id
    name
    stock
    code
  }
}
````

### Create product

````
mutation {
  createProduct(code: ID, quantity: Int) {
    id
    name
    stock
    code
  }
}
````


### Update product

````
mutation {
  createProduct(id: ID, quantity: Int) {
    id
    name
    stock
    code
  }
}
````

### Update product

````
mutation {
	updateProduct(id: ID, quantity: Int) {
    id
    name
    stock
    code
  } 
}
````

### Delete product

````
mutation {
  deleteProduct(id: ID) {
    message
  }
}
````

