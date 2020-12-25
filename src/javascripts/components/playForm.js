import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printPlaySection = () => {
  let domString = '';

  domString += `<h2>Fun Score: ${getTamagotchiStats.fun}</h2>`;
  domString += '<div class="button-block">';
  domString += '<button id="super-fun-button" class="btn btn-light">Super Fun</button>';
  domString += '<button id="just-fun-button" class="btn btn-light">Moderately Fun</button>';
  domString += '</div>';


  printToDom('play', domString);


  const superFunButtonEvent = () => {
    if (getTamagotchiStats.fun <= 85) { getTamagotchiStats.fun += 15; } else { getTamagotchiStats.fun = 100; }
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
