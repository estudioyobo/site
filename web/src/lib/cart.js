import React, { createContext, useState, useContext, useEffect } from 'react'

function storeProducts (products) {
  window.localStorage.setItem('products', JSON.stringify(products))
}
function retrieveProducts () {
  return JSON.parse(window.localStorage.getItem('products'))
}

// function Product (sku) {
//   // Your logic for your app.

//   // strore products in local storage

//   let storageProducts = JSON.parse(window.localStorage.getItem('products'))
//   let products = storageProducts.filter(product => product.sku !== sku)
//   window.localStorage.setItem('products', JSON.stringify(products))
// }

const CartContext = createContext({ products: [] })

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const prods = retrieveProducts()
    if (prods && prods.length > 0) setProducts(retrieveProducts())
  }, [])
  useEffect(() => {
    storeProducts(products)
  }, [products])
  function addProduct (product) {
    const selected = products.findIndex(p => p.sku === product.sku)
    console.log('sel', selected)
    if (selected >= 0) {
      const updatedProds = [...products]
      updatedProds[selected].quantity += product.quantity
      setProducts(updatedProds)
    } else {
      setProducts([...products, product])
    }
  }
  function removeProduct (sku) {
    setProducts(products.filter(p => p.sku !== sku))
  }
  const value = {
    products,
    addProduct,
    removeProduct,
    total: products.reduce((prev, { quantity }) => prev + quantity, 0)
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
