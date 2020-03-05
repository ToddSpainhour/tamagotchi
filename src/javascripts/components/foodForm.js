import printToDom from '../helpers/util';


const full = 100;

// const fullnessScore = '';

const foodStartingValue = () => full;

// const displayFullnessScore = () => {};

// const eatUnhealthyFood = () => fullnessScore - 3;

// const eatHealthyFood = () => fullnessScore + 10;

// const healthy-food-button

// const unhealthy-food-button

const printEatSection = () => {
  let domString = '';

  domString += `<h2>Fullness Score: ${foodStartingValue()} </h2>`;
  domString += '<button>Eat Healthy Food</button>';
  domString += '<button>Eat Unhealthy Food</button>';
  // use single quotes unless it contains a templete literal. Then use the usual ` before and after.

  printToDom('eat', domString);
};


export default printEatSection();
