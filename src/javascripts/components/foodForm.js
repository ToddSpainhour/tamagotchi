import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';
// import tamagotchi from '../helpers/data/tamagotchi';


const printEatSection = () => {
  let domString = '';

  domString += `<h2>Fullness Score: ${getTamagotchiStats.full} </h2>`;
  domString += '<button id="healthy-food-button">Eat Healthy Food</button>';
  domString += '<button id="unhealthy-food-button">Eat Unhealthy Food</button>';
  // use single quotes unless it contains a templete literal. Then use the usual ` before and after.

  printToDom('eat', domString);


  const eatHealthyFoodButtonEvent = () => {
    if (getTamagotchiStats.full <= 90) { getTamagotchiStats.full += 10; } else { getTamagotchiStats.full = 100; }
    printEatSection();
  };


  const eatUnhealthyFoodButtonEvent = () => {
    if (getTamagotchiStats.full >= 3) { getTamagotchiStats.full -= 3; } else { getTamagotchiStats.full = 0; }
    printEatSection();
  };

  $('#healthy-food-button').click(eatHealthyFoodButtonEvent);
  $('#unhealthy-food-button').click(eatUnhealthyFoodButtonEvent);
};


export default printEatSection();
