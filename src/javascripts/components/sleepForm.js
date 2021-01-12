import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';

const printSleepSection = () => {
  let domString = '';

  domString += `<h2>Energy Score: ${getTamagotchiStats.energy}</h2>`;
  domString += '<div class="button-block">';
  domString += '<button id="nap-button"  class="btn btn-light">Take a Nap</button>';
  domString += '<button id="deep-sleep-button"  class="btn btn-light">Deep Sleep</button>';
  domString += '</div>';

  printToDom('sleep', domString);

  const napButtonEvent = () => {
    if (getTamagotchiStats.energy < 91) { getTamagotchiStats.energy += 10; } else { getTamagotchiStats.energy = 100; }
    printSleepSection();
  };

  const deepSleepButtonEvent = () => {
    if (getTamagotchiStats.energy <= 40) { getTamagotchiStats.engery += 60; } else { getTamagotchiStats.energy = 100; }
    printSleepSection();
  };

  $('#nap-button').on('click', napButtonEvent);
  $('#deep-sleep-button').on('click', deepSleepButtonEvent);
};

export default printSleepSection;
