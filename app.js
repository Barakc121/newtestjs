import input from "analiza-sync";
import { createPlayer } from "./utils/index.js";
import allRiddles from "./riddles/index.js";

console.log("welcome to the game");
const name = input("enter your name");
const player = createPlayer(name);
allRiddles.forEach((element) => {});


function test() {
  const player = createPlayer(input("Name: \n"));
  for (let index = 0; index < allRiddels.length; index++) {
    const riddel = allRiddels[index];
    const time = measureSolveTime(() => askRiddle(riddel));
    addSolveTime(player, time)
  }
  showStats(player);
}
test();
