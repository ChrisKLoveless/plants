let plant = {
    water: 0,
    soil: 0,
    light: 0
  }

  // const hydrate = (plant) => {
  //   return {
  //     ...plant,
  //     water: (plant.water || 0) + 1
  //   }
  // }

  // const feed = (plant) => {
  //   return {
  //     ...plant,
  //     soil: (plant.soil || 0) + 1
  //   }
  // }

  const giveLight = (plant) => {
    return {
      ...plant,
      light: (plant.light || 0) + 1
    }
  }

  const changePlantState = (plant, property) => {
    return {
      ...plant,
      [property]: (plant[property] || 0) + 1
    }
  }
//FUNCTION TO STORE STATE
  const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }

  const stateControl = storeState();

  // const changeState = (state, prop, value) => ({
  //   ...state,
  //   [prop] : (state[prop] || 0) + value
  // })

  // This is a function factory. 
// We can easily create more specific functions that 
// alter a plant's soil, water, and light to varying degrees.
  // CURRIED FUNCTION--vv
  const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      })
    }
  }

  // We create four functions using our function factory. 
// We could easily create many more.
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);



