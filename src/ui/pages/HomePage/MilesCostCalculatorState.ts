export default class MilesCostCalculatorState {
  constructor(
    /** Miles (natural number, with thousands included) */
    public miles: number,
    /** Original value for one thousand miles (1.000) */
    public price: number,
    /** Discount percentage times 100 (the percentage as it is, not the fraction) */
    public discount: number,
    /** Bonus percentage times 100 (the percentage as it is (45), not the fraction (0.45)) */
    public bonus: number
  ) {}

  private get bonusPercent(): number {
    return this.bonus / 100;
  }
  private get discountPercent(): number {
    return this.discount / 100;
  }

  public get pricePerThousandMileswithBonusAndDiscount(): number {
    return (this.totalPriceForThousandMiles / this.totalMiles) * 1000;
  }

  public get totalPriceForThousandMiles(): number {
    return this.totalPrice * (this.miles / 1000);
  }

  public get totalMiles(): number {
    return this.miles + this.bonusMiles;
  }

  public get bonusMiles(): number {
    return this.miles * this.bonusPercent;
  }

  public get totalPrice(): number {
    return this.price - this.totalDiscount;
  }

  public get totalDiscount(): number {
    return this.price * this.discountPercent;
  }

  incrementMilesAt(amount: number) {
    this.miles += amount;
  }

  decrementMilesAt(amount: number) {
    this.incrementMilesAt(-amount);
  }

  copy() {
    return new MilesCostCalculatorState(
      this.miles,
      this.price,
      this.discount,
      this.bonus
    );
  }
}
