import '../styles/main.scss';
import printEatSection from './components/foodForm';
import printFightSection from './components/fightForm';
import printPlaySection from './components/playForm';
import printSleepSection from './components/sleepForm';

const init = () => {
  printPlaySection();
  printFightSection();
  printEatSection();
  printSleepSection();
};

init();
