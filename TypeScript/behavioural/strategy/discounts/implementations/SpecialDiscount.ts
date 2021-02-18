import { Discount } from '../Discount'

export class SpecialDiscount implements Discount {
  calculateTotal(subTotal: number) {
    return subTotal - subTotal * 0.2
  }
}
