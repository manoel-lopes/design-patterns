import { Discount } from '../Discount'

export class ExceptionalDiscount implements Discount {
  calculateTotal(subTotal: number) {
    return subTotal - subTotal * 0.3
  }
}
