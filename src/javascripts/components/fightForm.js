import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printFightSection = () => {
  let domString = '';

  domString += `<h2>Health Score: ${getTamagotchiStats.strength} </h2>`;
  domString += '<div class="button-block">';
  domString += '<button id="fight-button"  class="btn btn-light">Fight</button>';
  domString += '<button id="run-away-button"  class="btn btn-light">Run Away</button>';
  domString += '</div>';

  printToDom('fight', domString);

  const fightButtonEvent = () => {
    if (getTamagotchiStats.strength >= 10) { getTamagotchiStats.strength -= 10; } else { getTamagotchiStats.strength = 0; }
    printFightSection();
  };


  const runAwayButtonEvent = () => {
    if (getTamagotchiStats.strength >= 0 && getTamagotchiStats.strength < 100) { getTamagotchiStats.strength += 1; }
    printFightSection();
  };

  $('#fight-button').click(fightButtonEvent);
  $('#run-away-button').click(runAwayButtonEvent);
};

export default printFightSection;
