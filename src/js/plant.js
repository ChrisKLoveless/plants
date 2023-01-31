export let plant = {
  id: 0,
  water: 0,
  soil: 0,
  light: 0
};

// eslint-disable-next-line no-unused-vars
export function createPlant() {
  let plantId = 0;
  return function newPlant(thisWater = 0, thisSoil = 0, thisLight = 0) {
    const newId = plantId + 1;
    plantId = newId;
    return { water: thisWater, soil: thisSoil, light: thisLight, id: newId };
  };
}

export const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  };
};

export const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  };
};
//FUNCTION TO STORE STATE
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateControl = storeState();

// CURRIED FUNCTION--vv
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};
 
export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);