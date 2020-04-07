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
const ignore = changeState("happiness")(-2);

const hippoChanger = storeHippo();

const happyHippo = hippoChanger(playWith);
const ignoredHippo = hippoChanger(ignore);