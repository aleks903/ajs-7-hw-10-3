import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const gsl = await GameSavingLoader.load();
    console.log(gsl);
  } catch (error) {
    console.log(error);
  }
})();
