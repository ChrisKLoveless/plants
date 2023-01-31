let plant = {
    water: 0,
    soil: 0,
    light: 0
  }

  const hydrate = (plant) => {
    return {
      ...plant,
      water: (plant.water || 0) + 1
    }
  }

  const feed = (plant) => {
    return {
      ...plant,
      soil: (plant.soil || 0) + 1
    }
  }

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

  const changeState = (state, prop, value) => ({
    ...state,
    [prop] : (state[prop] || 0) + value
  })

  // CURRIED FUNCTION
  // const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      })
    }
  // }
