import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';

const printEatSection = () => {
  let domString = '';

  domString += `<h2>Fullness Score: ${getTamagotchiStats.full} </h2>`;
  domString += '<div class="button-block">';
  domString += '<button id="healthy-food-button" class="btn btn-light">Eat Healthy Food</button>';
  domString += '<button id="unhealthy-food-button" class="btn btn-light">Eat Unhealthy Food</button>';
  domString += '</div>';

  printToDom('eat', domString);

  const eatHealthyFoodButtonEvent = () => {
    if (getTamagotchiStats.full <= 90) { getTamagotchiStats.full += 10; } else { getTamagotchiStats.full = 100; }
    printEatSection();
  };

  const eatUnhealthyFoodButtonEvent = () => {
    if (getTamagotchiStats.full >= 3) { getTamagotchiStats.full -= 3; } else { getTamagotchiStats.full = 0; }
    printEatSection();
  };

  $('#healthy-food-button').on('click', eatHealthyFoodButtonEvent);
  $('#unhealthy-food-button').on('click', eatUnhealthyFoodButtonEvent);
};

export default printEatSection;
