import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';


const printFightSection = () => {
  let domString = '';

  domString += `<h2>Health Score: ${getTamagotchiStats.strength} </h2>`;
  domString += '<button id="fight-button">Fight</button>';
  domString += '<button id="run-away-button">Run Away</button>';

  printToDom('fight', domString);

  const fightButtonEvent = () => {
    if (getTamagotchiStats.strength >= 10) { getTamagotchiStats.strength -= 10; } else { getTamagotchiStats.strength = 0; }
    console.error('this is inside your fightButtonEvent');
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
