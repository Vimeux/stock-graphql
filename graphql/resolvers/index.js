const { default: fetch } = require('node-fetch')

module.exports = {
  products: async () => {
    const products = 'http://127.0.0.1:5000/products'

    try {
      const productRes = await fetch(products)
      const productData = await productRes.json()

      return productData.map(product => {
        return {
          ...product,
          _id: product.id,
          name: product.name,
          stock: product.stock,
          code: product.code
        }
      })
    } catch (err) {
      throw err
    }
  },

  product: async ({ id }) => {
    const product = 'http://127.0.0.1:5000/products/' + id

    try {
      const productRes = await fetch(product)
      const productData = await productRes.json()

      console.log(productData);

      return {
        ...productData,
        _id: productData.id,
        name: productData.name,
        stock: productData.stock,
        code: productData.code
      }
    } catch (err) {
      throw err
    }
  },

  createProduct: async ({ id, quantity, name }) => {
    try {
      // create product
      const openFoodApi = `https://world.openfoodfacts.org/api/v2/search?fields=id,code,product_name&code=${id}`
      const product = 'http://127.0.0.1:5000/products/create'

      const openFoodRes = await fetch(openFoodApi)
      const openFoodData = await openFoodRes.json()

      //if product code is not found, throw error
      if (openFoodData == null) return new Error('Product not found')

      // console.log((await openFoodRes.json()).products[0].code);

      const productRes = await fetch(product, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // if name is not provided, use the name from openfood api
          name: name || openFoodData.products[0].product_name,
          stock: quantity,
          code: openFoodData.products[0].code
        })
      })

      const productData = await productRes.json()

      return {
        ...productData,
        _id: productData.id,
        name: productData.name,
        stock: productData.stock,
        code: productData.code
      }

    } catch (err) {
      throw err
    }
  },

  updateProduct: async ({ id, quantity }) => {
    try {
      const product = 'http://127.0.0.1:5000/products/update?id=' + id

      const productRes = await fetch(product, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stock: quantity
        })
      })

      const productData = await productRes.json()
      
      return {
        ...productData,
        _id: productData.id,
        name: productData.name,
        stock: productData.stock,
        code: productData.code
      }
    } catch (err) {
      throw err
    }
  },

  deleteProduct: async ({ id }) => {
    try {
      const product = 'http://127.0.0.1:5000/products/delete?id=' + id

      const productRes = await fetch(product, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const productData = await productRes.json()

      return {
        message: productData.message
      }
    } catch (err) {
      throw err
    }
  }
}