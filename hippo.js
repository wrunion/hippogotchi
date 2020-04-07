// const play = (hippo) => {
//   return {
//     ...hippo,
//     happiness: (hippo.happiness || 0) + 1
//   }
// };

// // let hippo1 = {};

// // let playedWithHippo1 = play(hippo1);
// // console.log(playedWithHippo1);

// const clean = (hippo) => {
//   return {
//     ...hippo,
//     cleanliness: (hippo.cleanliness || 0) + 1  
//   }
// };

// let hippo2 = {};
// // console.log(play(hippo2));

// const changeHippoState = (hippo, property, amount) => {
//   return {
//     ...hippo,
//     [property]: (hippo[property] || 0) + amount
//   } 
// };

// let animal = {};
// console.log(changeHippoState(animal, "cleanliness", 5));
// const changeState = (state, prop) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + 1
//   }
// };
// let animal = {};
// console.log(changeState(animal, "cleanliness"));

// const changeState2 = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// };

// let animal = {};
// console.log(changeState2(animal, "cleanliness", 5));

let obj = {}
let hippo = {}

const changeState = (prop) => {
  return (value) => {
    return (obj) => ({
      ...obj,
      [prop]: (obj[prop] || 0) + value
    })
  }
}

const storeHippo = () => {
  let currentHippo = {};
  return (stateChangeFunction) => {
    const newHippo = stateChangeFunction(currentHippo);
    currentHippo = {...newHippo};
    return newHippo;
  }
}

const playWith = changeState('happiness')(5);

const hippoChanger = storeHippo();

// const happyHippo = changeState(playWith(hippo));
const happyHippo = hippoChanger(playWith);

console.log(happyHippo);

// const play = changeState("happiness");
// console.log(play(5)(obj));

// const health = changeState("health");
// console.log(health(-5)(obj));

// const playWith = changeState('happiness')(5);
// console.log(playWith(hippo1));