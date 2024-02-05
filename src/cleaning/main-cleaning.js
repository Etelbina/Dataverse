import { renderItems } from './view-cleaning.js';
import data from './data/dataset.js';
import { filterData } from './data-functions-Cleaning.js';
import { sortData } from './data-functions-Cleaning.js';
import { createStatistics } from './data-functions-Cleaning.js';

//----------------------
//Keeps an array object in the original state
const clonedData = structuredClone(data);

//----------------------
//The data that is used and modified everywhere
let currentData = data;

//----------------------
//Stores the value of orderBy button selected
let activeSorting = 0;

//----------------------
//Calls createStatistics function to create statistics and
//keps it into a variable to be use by other functions
const statiscis = createStatistics(clonedData);

//----------------------
//Calls renderItems function to render plants and
//keps it into a variable to be use by other functions
const cards=renderItems(currentData);

//----------------------
//Excecutes setListeners to activate buttons
setListeners();

//----------------------
//Gets the root element
const mainContainer=document.querySelector("#root");

//----------------------
//Cards is declared as a child of mainContainer
mainContainer.appendChild(cards);

//----------------------
//Refresh full page clicking logo and name
//TODO add event listener
function refreshPage() {
  window.location.reload();
}
window.refreshPage=refreshPage;

//----------------------
//Clear page to don't overload the elements of the cardList
//Must be call before changing curretData value
function clearView(){
  const cardsContainer=document.getElementById("ul-cards");
  cardsContainer.innerHTML="";
}

// Filter by category flow ----------------------
/**
 * Gets the category buttons, iterates them to add listeners to excecutes filterData
 * executes sort data if some option is active
 * @returns: new currentData
 */
const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => 
{
  button.addEventListener('click',(e)=> 
  {
    const category = e.target.getAttribute('data-category');
    currentData = filterData(data, 'categoryPlant', category);
    if (activeSorting === 1) {
      sortData(currentData, "id", 1);
    } else if (activeSorting === 2) {
      sortData(currentData, "id", 2);
    }

    clearView();
    renderItems(currentData);
    setListeners();
    return currentData;
  });
});

// Filter by name flow ----------------------
/**
 * Gets the text box, sets the writen value, turns the firsf caracter to upper case
 * filteredName keeps filterData with the arguments to be use
 */
function filterByName(){
  const inputName = document.getElementById('input-name');
  const inputReceive = inputName.value;

  const firstLetter = inputReceive[0].toUpperCase();
  const inputCorrected= firstLetter + inputReceive.slice(1)

  const filteredName = filterData(clonedData, 'name', inputCorrected);
  clearView();
  renderItems(filteredName);
  setListeners();
}

//Gets form element, adds listener submit, excecutes preventDefault
//and calls fiterByName() function
//TODO why is needed prevent default?
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  filterByName();
});

//Adds listener when enter is press and calls fiterByName() function
const inputName = document.getElementById('input-name');
inputName.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filterByName();
  }
});

// Order by flow ----------------------
/**
 * Gets the select element, adds the listener on change, gets the value of selection
 * if 3 is selected render cloneData, else executes sortData with index guiven
 */
const dropdown = document.getElementById("item-order");
dropdown.addEventListener("change", () => {
  const i = dropdown.selectedIndex;
  if (i === 3) {
    clearView();
    renderItems(clonedData);
    setListeners();
    dropdown.selectedIndex = 0;
  } else {
    activeSorting = i;
    clearView();
    sortData(currentData, "id", i);
    renderItems(currentData);
    setListeners();
  }
});

// Turn cards ----------------------
//Applies turnCard to buttons

const cardList = document.getElementById("ul-cards");
cardList.addEventListener("click",(event) => {
  //TODO - Fix event delegated inside the list, this is executed every time the list receives a click.
  //console.log("se esta ejecutando todas las veces")
  const cardContainer= event.target.closest('.card-container');
  if(event.target.matches('.details-button')) 
  {
    turnCard(cardContainer);
  }
  else if (event.target.matches('.flip-button')) 
  {
    turnCard(cardContainer); 
  }
});

//gets the cards elements to change the class to show front or back
function turnCard(cardContainer){
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");
  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}

// Statistics ----------------------
/**
 * This function creates the words to be insert into the statistics modal
 * 
 * @param { property } categoryPlant - From object array
 * @param { id argument } statsModal - Modal box from HTML
 * @param { object } statsByCategory - Created new element
 */
function renderStatisticsWords(categoryPlant, statsModal, statsByCategory) {

  const plantCategory = statsModal.querySelector("#plant-category-modal");
  plantCategory.innerHTML = categoryPlant;

  const waterAverageWord = document.createElement("h5");
  waterAverageWord.className="water";

  const statisticsContainer = statsModal.querySelector(".statistics-totals");
  statisticsContainer.innerHTML = "";
  statisticsContainer.appendChild(waterAverageWord);

  if(statsByCategory[categoryPlant].average.waterAverage === 1) {
    waterAverageWord.innerHTML+="Poca";
  } else if(statsByCategory[categoryPlant].average.waterAverage === 2) {
    waterAverageWord.innerHTML+="Regular";
  } else if(statsByCategory[categoryPlant].average.waterAverage === 3) {
    waterAverageWord.innerHTML+="Mucha";
  }

  const lightAverageWord = document.createElement("h5");
  lightAverageWord.className="light";

  statisticsContainer.appendChild(lightAverageWord);

  if(statsByCategory[categoryPlant].average.lightAverage === 1) {
    lightAverageWord.innerHTML+="Poca";
  } else if(statsByCategory[categoryPlant].average.lightAverage === 2) {
    lightAverageWord.innerHTML+="Regular";
  } else if(statsByCategory[categoryPlant].average.lightAverage === 3) {
    lightAverageWord.innerHTML+="Mucha";
  }

  const careAverageWord = document.createElement("h5");
  careAverageWord.className="care";

  statisticsContainer.appendChild(careAverageWord);

  if(statsByCategory[categoryPlant].average.careAverage === 1) {
    careAverageWord.innerHTML+="Poca";
  } else if(statsByCategory[categoryPlant].average.careAverage === 2) {
    careAverageWord.innerHTML+="Regular";
  } else if(statsByCategory[categoryPlant].average.careAverage === 3) {
    careAverageWord.innerHTML+="Mucha";
  }
}

// Description ----------------------
/**
 * This function inserts Name and description to description modal
 * 
 * @param { property } namePlant - From object array
 * @param { name argument } descriptionModal - Modal box from HTML
 * @param { property } description - From object array
 */
function renderDescriptions(namePlant, descriptionModal, description) {
  const plantName = descriptionModal.querySelector("#plant-name-modal");
  plantName.innerHTML = namePlant;

  const plantDescription = descriptionModal.querySelector("#plant-description-modal");
  plantDescription.innerHTML = description;
}

// Listeners -----------------------------------------------------------------------------------------------------------------
/**
 * This sets the listeners to execute the functions
 * renderStatisticsWords
 * renderDescriptions
 * .show() and .close() methods to modasl
 */
function setListeners(){
  //TODO: - Why sometimes getElementsByClassName is not working?
  const statisticsButtons=document.querySelectorAll('.modal-statistics-button');
  statisticsButtons.forEach(button => 
  {
    button.addEventListener('click',()=> 
    {
      const categoryPlant = button.id;
      const statsModal = document.getElementById("statistics-modal");
      renderStatisticsWords(categoryPlant, statsModal, statiscis);
      statsModal.showModal();
    });
  });

  const descriptionButtons = document.querySelectorAll(".modal-description-button");
  descriptionButtons.forEach(descriptionButton => {
    descriptionButton.addEventListener("click", () =>{
    
      const idPlant = descriptionButton.id;

      data.forEach(plant => {
        if(plant.id === idPlant){
          const descriptionModal = document.getElementById("description-modal");
          renderDescriptions(plant.name, descriptionModal, plant.description);
          descriptionModal.showModal();
        }
      });
    });
  });

  const closeButtonDescription=document.querySelector(".close-button");
  closeButtonDescription.addEventListener("click", () => {
    const descriptionModal = document.getElementById("description-modal");
    descriptionModal.close();
  });

  const closeButtonStats = document.querySelector(".close-button-stats");
  closeButtonStats.addEventListener("click", () =>{
    const statsModal = document.getElementById("statistics-modal");
    statsModal.close();
  });
}
