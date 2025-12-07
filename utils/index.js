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

export function askRiddle(riddleObj) {}

export function measureSolveTime(fn) {
  let start = Date.now();
  fn();
  let end = Date.now();
  const averge = (start - end) / 1000;
  return averge;
}

export { createPlayer, addSolveTime, showStats };
// export function test(){
// const username="enter your number :"
//     const player=createPlayer(username)
//     addSolveTime(player,3)
//     showStats(player)
// }
// test()
