import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printPlaySection = () => {
  let domString = '';

  domString += `<h2>Fun Score: ${getTamagotchiStats.fun}</h2>`;
  domString += '<button id="super-fun-button">Super Fun</button>';
  domString += '<button id="just-fun-button">It is fun i Guess</button>';

  printToDom('play', domString);


  const superFunButtonEvent = () => {
    if (getTamagotchiStats.fun <= 50) { getTamagotchiStats.fun += 50; } else { getTamagotchiStats.fun = 100; }
    printPlaySection();
  };


  const justFunButtonEvent = () => {
    if (getTamagotchiStats.fun <= 99) { getTamagotchiStats.fun += 2; }
    printPlaySection();
  };


  $('#super-fun-button').click(superFunButtonEvent);
  $('#just-fun-button').click(justFunButtonEvent);
};

export default printPlaySection;
