export default class Player {
  constructor(name, surname, lotteryNumbers) {
    this.name = name;
    this.surname = surname;
    this.lotteryNumbers = lotteryNumbers;
  }
  getPlayerDetails() {
    return `${this.name} ${this.surname} ${this.lotteryNumbers}`;
  }
  //samo primjer
  getMaxnUmber() {
    const maxNumber = Math.max(this.lotteryNumbers);
    return maxNumber;
  }
}
