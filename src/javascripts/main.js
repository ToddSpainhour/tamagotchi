import '../styles/main.scss';
import printEatSection from './components/foodForm';
import printFightSection from './components/fightForm';

// console.error('hi');

// const events = () => { printFightSection printEatSection
// };
// // const init = () => printEatSection;

// const init = () => events();

const init = () => {
  printFightSection();
  printEatSection();
};

init();
