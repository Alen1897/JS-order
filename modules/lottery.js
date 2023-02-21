import Player from "./player.js";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }

  // funkcija za broj 1 do 7
  getLotteryNumbers() {
    let lotteryNumbers = [];
    while (lotteryNumbers.length < 4) {
      let number = Math.floor(Math.random() * 7) + 1;

      // provjera da li je broj u array-u

      if (lotteryNumbers.indexOf(number) === -1) {
        lotteryNumbers.push(number);
      }
    }

    lotteryNumbers.sort();
    return lotteryNumbers;
  }
  generatePlayers() {
    this.people.map((person) => {
      const player = new Player(
        person.name,
        person.surname,
        this.getLotteryNumbers()
      );

      console.log(player);

      this.players.push(player);
    });
  }

  getWinningCombination() {
    this.winningCombination = this.getLotteryNumbers();
  }

  startDrawing() {
    this.generatePlayers();
    this.getWinningCombination();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const winners = this.players.filter((player) =>
          player.lotteryNumbers.every(
            (val, index) => val === this.winningCombination[index]
          )
        );
        const result = {
          winningCombination: this.winningCombination,
          winners,
        };
        if (winners.length > 0) {
          resolve(result);
        } else {
          reject(result);
        }
      }, 2000);
    });
  }
}
