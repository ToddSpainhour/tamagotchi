import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printEatSection = () => {
  let domString = '';

  domString += `<h2>Fullness Score: ${getTamagotchiStats.full} </h2>`;
  domString += '<button id="healthy-food-button">Eat Healthy Food</button>';
  domString += '<button id="unhealthy-food-button">Eat Unhealthy Food</button>';
  // use single quotes unless it contains a templete literal. Then use the usual ` before and after.

  printToDom('eat', domString);

  const eatHealthyFoodButtonEvent = () => console.error('this is inside your eatHealthyFoodButtonEvent');
  const eatUnhealthyFoodButtonEvent = () => console.error('this is inside your eatUnhealthyFoodButtonEvent');

  $('#healthy-food-button').click(eatHealthyFoodButtonEvent);
  $('#unhealthy-food-button').click(eatUnhealthyFoodButtonEvent);
};


export default printEatSection();
