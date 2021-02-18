import { Product } from '../Product'
import { Discount } from '../../discount/Discount'

export class ShoppingCart {
  private _products: Product[] = []
  protected _discount: Discount = null

  addProduct(...products: Product[]) {
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
      : this._discount.calculateTotal(this.subTotal)
  }
}
