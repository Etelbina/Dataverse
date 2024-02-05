//----------------------
/**
 * This function gets the category from the object
 * and compares it with the value of the atribute in HTML element
 * is call by categoryButtons function when a button is cliked
 * 
 * @param { every plant } data - From dataset
 * @param { property } filterBy - Category of every element of the array object
 * @param { atribute } value - Category of plant
 * 
 * @returns data filtered
 */
export const filterData = (data, filterBy, value) => {
  return data.filter(objeto => objeto[filterBy] === value);
};

//----------------------
/**
 * This function decides with a condition
 * wich order needs to me used
 * a-z / z-a
 * is call by dropdown function when an option is clicked
 * 
 * @param { data } data - currentData
 * @param { property } sortBy - id of every element of the array object
 * @param { option } sortOrder - selectedIndex from dropdown
 * 
 * 
 */
export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function(a,b){
    if (sortOrder === 1) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 2) {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
};

//----------------------
/**
 * This function creates the structure
 * stores the numbers into an array
 * calculate the sum of every type of fact
 * calculates the average of every type of fact
 * and stores them into the structure
 * in call by statiscis variable to be use in ststisticsButton
 * 
 * @param { every plant } data - From clonedData
 * 
 * @returns the new populated object
 */
export const createStatistics = (data) => {
  //1 - Create empty structure to host categories in arrays
  const statsByCategory = {
    "ornamental":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "medicinal":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "aromatic":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "desert":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "trees":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
  };
  //2 - Iterate in data
  data.forEach(plant => {
    //3 - Identify category
    const category = plant.categoryPlant;
    //4 - Extracts facts
    //5 - Store facts in array corresponding category
    statsByCategory[category].factsByPlants.push(plant.facts);
    
    //6 - Calculate average by category
    statsByCategory[category].sum.waterSum+=plant.facts.waterAmount;
    //6.1 - Save total facts by category in dedicated structure
    statsByCategory[category].average.waterAverage=Math.round(statsByCategory[category].sum.waterSum/statsByCategory[category].factsByPlants.length);

    //repeat for light
    statsByCategory[category].sum.lightSum+=plant.facts.sunLight;
    statsByCategory[category].average.lightAverage=Math.round(statsByCategory[category].sum.lightSum/statsByCategory[category].factsByPlants.length);

    //repeat for care
    statsByCategory[category].sum.careSum+=plant.facts.careDifficulty;
    statsByCategory[category].average.careAverage=Math.round(statsByCategory[category].sum.careSum/statsByCategory[category].factsByPlants.length);
  });
  
  return statsByCategory;
}