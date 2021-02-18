export type ECommerceProductProtocol = {
  name: string
  price: number
}

export class ECommerceShoppingCart {
  private _products: ECommerceProductProtocol[] = []
  protected _discount: Discount = new Discount()

  addProduct(...products: ECommerceProductProtocol[]) {
    products.forEach(product => this._products.push(product))
  }

  get products() {
    return this._products
  }

  get subTotal() {
    return this._products.reduce((sum, product) => sum + product.price, 0)
  }

  set discount(discount: Discount) {
    this._discount = discount
  }

  get total() {
    return this._discount.getDiscount(this)
  }
}

export class Discount {
  getDiscount(cart: ECommerceShoppingCart) {
    return cart.subTotal
  }
}

export class DefaultDiscount extends Discount {
  protected _discount = 0

  getDiscount(cart: ECommerceShoppingCart) {
    const subTotal = cart.subTotal

    if (subTotal >= 100 && subTotal < 200) {
      this._discount = 10
    } else if (subTotal >= 200 && subTotal < 300) {
      this._discount = 20
    } else if (subTotal >= 300) {
      this._discount = 30
    }
    return subTotal - subTotal * (this._discount / 100)
  }
}

const shoppingCart = new ECommerceShoppingCart()
shoppingCart.addProduct({ name: 'Product 1', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
shoppingCart.discount = new DefaultDiscount()
console.log(shoppingCart.subTotal)
console.log(shoppingCart.total)

// import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
// import { DefaultDiscount } from './shopping-cart/default-discount';
// import { NewDiscount } from './shopping-cart/new-discount';

// shoppingCart.discount = new DefaultDiscount();
// shoppingCart.discount = new NewDiscount();
