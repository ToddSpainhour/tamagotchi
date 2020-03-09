import printToDom from '../helpers/util';
import getTamagotchiStats from '../helpers/data/tamagotchi';

const printSleepSection = () => {
  let domString = '';

  domString += `<h2>Energy Meter: ${getTamagotchiStats.energy}</h2>`;
  domString += '<div class="button-block">';
  domString += '<button id="nap-button">Take a Nap</button>';
  domString += '<button id="deep-sleep-button">Deep Sleep</button>';
  domString += '</div>';


  printToDom('sleep', domString);


  const napButtonEvent = () => {
    if (getTamagotchiStats.energy < 51) { getTamagotchiStats.energy += 50; } else { getTamagotchiStats.energy = 100; }
    printSleepSection();
  };


  const deepSleepButtonEvent = () => {
    if (getTamagotchiStats.energy <= 40) { getTamagotchiStats.engery += 60; } else { getTamagotchiStats.energy = 100; }
    printSleepSection();
  };

  $('#nap-button').click(napButtonEvent);
  $('#deep-sleep-button').click(deepSleepButtonEvent);
};


export default printSleepSection;
