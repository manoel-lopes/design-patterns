export type ECommerceProductProtocol = {
  name: string
  price: number
}

export class ECommerceShoppingCart {
  private _products: ECommerceProductProtocol[] = []
  protected _discount: Discount = null

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
    return !this._discount
      ? this.subTotal
      : this._discount.getDiscount(this.subTotal)
  }
}

export interface Discount {
  getDiscount(subTotal: number): number
}

export class DefaultDiscount implements Discount {
  getDiscount(subTotal: number) {
    return subTotal - subTotal * 0.1
  }
}

export class SpecialDiscount implements Discount {
  getDiscount(subTotal: number) {
    return subTotal - subTotal * 0.2
  }
}

export class ExceptionalDiscount implements Discount {
  getDiscount(subTotal: number) {
    return subTotal - subTotal * 0.3
  }
}

const shoppingCart = new ECommerceShoppingCart()
shoppingCart.addProduct({ name: 'Product 1', price: 50 })
shoppingCart.addProduct({ name: 'Product 2', price: 50 })
// shoppingCart.addProduct({ name: 'Product 3', price: 50 })
// shoppingCart.discount = new DefaultDiscount()
// shoppingCart.discount = new SpecialDiscount()
shoppingCart.discount = new ExceptionalDiscount()
console.log(shoppingCart.subTotal)
console.log(shoppingCart.total)

// import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
// import { DefaultDiscount } from './shopping-cart/default-discount';
// import { NewDiscount } from './shopping-cart/new-discount';

// shoppingCart.discount = new DefaultDiscount();
// shoppingCart.discount = new NewDiscount();
