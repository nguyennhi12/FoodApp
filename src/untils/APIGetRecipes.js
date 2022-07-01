import {DATA_MY_RECIPE} from '../constants';

export const ApiGetRecipes = {
  getDataRecipes: (take, skip) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(DATA_MY_RECIPE.slice(skip, skip + take));
      }, 2000);
    });
  },
};
