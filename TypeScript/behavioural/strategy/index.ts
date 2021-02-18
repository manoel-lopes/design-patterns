import { ShoppingCart } from './entities/implementation/ShoppingCart'
import { DefaultDiscount } from './discounts/implementations/DefaultDiscount'
import { SpecialDiscount } from './discounts/implementations/SpecialDiscount'
import { ExceptionalDiscount } from './discounts/implementations/ExceptionalDiscount'

const shoppingCart = new ShoppingCart()
shoppingCart.addProduct({ name: 'Product 1', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.discount = new DefaultDiscount()
shoppingCart.discount = new SpecialDiscount()
shoppingCart.discount = new ExceptionalDiscount()
console.log(shoppingCart.subTotal)
console.log(shoppingCart.total)
