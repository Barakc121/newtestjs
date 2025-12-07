import input from "analiza-sync";
import allRiddels from "../riddles/index.js";

export function createPlayer(name) {
  const player = {
    name,
    times: [],
  };
  return player;
}

export function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

export function showStats(player) {
  let totalTime = 0;
  for (let i = 0; i < player.times.length; i++) {
    totalTime += player.times[i];
  }
  const averge = totalTime / player.times.length;

  console.log(`total time ${totalTime} seconds `);
  console.log(`averge per one${averge}`);
}

export function askRiddle(riddleObj) {
  console.log(riddleObj.name);
  console.log(riddleObj.taskDescription);
  if (riddleObj.choices) {
    for (let i = 0; i < riddleObj.choices?.length; i++) {
      const element = riddleObj.choices[i];
      console.log(i + 1, element);
    }
  }
  let answer;
  while (riddleObj.correctAnswer !== answer) {
    console.log(riddleObj.taskDescription);
    answer = input("what is a answer  :");
  }
}

export function measureSolveTime(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  const time = (end-start) / 1000;
  return time;
}

// function test() {
//   const player = createPlayer(input("Name: \n"));
//   for (let index = 0; index < allRiddels.length; index++) {
//     const riddel = allRiddels[index];
//     const time = measureSolveTime(() => askRiddle(riddel));
//     addSolveTime(player, time)
//   }
//   showStats(player);
// }
// test();
