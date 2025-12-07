import input from "analiza-sync";
import { createPlayer } from "./utils/index.js";
import allRiddles from "./riddles/index.js";

console.log("welcome to the game");
const name = input("enter your name");
const player = createPlayer(name);
allRiddles.forEach((element) => {});
