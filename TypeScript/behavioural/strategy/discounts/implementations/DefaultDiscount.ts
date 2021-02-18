import { Discount } from '../Discount'

export class DefaultDiscount implements Discount {
  calculateTotal(subTotal: number) {
    return subTotal - subTotal * 0.1
  }
}
