import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printEatSection = () => {
  let domString = '';

  domString += `<h2>Fullness Score: ${getTamagotchiStats.full} </h2>`;
  domString += '<button>Eat Healthy Food</button>';
  domString += '<button>Eat Unhealthy Food</button>';
  // use single quotes unless it contains a templete literal. Then use the usual ` before and after.

  printToDom('eat', domString);
};


export default printEatSection();
