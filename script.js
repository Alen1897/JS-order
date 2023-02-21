import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const lottery = new Lottery(politicians);

lottery.startDrawing();

lottery
  .startDrawing()
  .then((result) => {
    console.log("ovo je uspjesšno izlačenje, resolve");
    console.log(result);
  })
  .catch((result) => {})
  .finally(() => {});
