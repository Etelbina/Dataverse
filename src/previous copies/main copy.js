import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';

const clonedData = structuredClone(data); //clona el arreglo de objetos
let currentData = data;
//Esta variable almacena el valor de la seleccion del boton orderBy
//para que no sea descartado al cambiar de categoría
let activeSorting = 0;

//------------------------------------------------------------------------------------------------------------
//Se declara una variable cuyo valor es la funcion renderItems con el parámetro currentData
const cards=renderItems(currentData);

//Se declara una variable que trae el valor de root
const mainContainer=document.querySelector("#root");

//Se declara cards como hijo de mainContainer
mainContainer.appendChild(cards);


//Esta función refresca la página completa. Se le aplica a los elementos de la sección brand
function refreshPage() {
  window.location.reload()
}

window.refreshPage=refreshPage;

//--------------------------------------------------------------------------------------------------------------
//se agrega clase comun a los botones para agregarle el listener a todos de un solo
//al hacer click en alguno de ellos se va a ejecutar la funcion definida
// identificar a que boton se le dio click
//llamar a la funcion de filtrado para que cree el nuevo array con la categoria que fue identificada
const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => 
{
  button.addEventListener('click',(e)=> 
  {
    const category = e.target.getAttribute('data-category');
    currentData = filterData(data, 'categoryPlant', category);
    //console.log(filteredData)
    //console.log(e.target)
    if (activeSorting === 1) {
      sortData(currentData, "id", 1);
    } else if (activeSorting === 2) {
      sortData(currentData, "id", 2);
    }

    clearView();
    renderItems(currentData);
    return currentData;
  });
});
//------------------------------------------------------------------------------------------------
//Esta función limpia la pantalla
//Se debe llamar antes de cambiar el valor de currentData
//para que no se sobreescriban los elementos del objeto
function clearView(){
  const cardsContainer=document.getElementById("ulCards");
  cardsContainer.innerHTML="";
}

//------------------------------------------------------------------------------------------------------
//Filtrar por nombre 

//crear una funcion que
//reciba el nombre que proporciona el usuario
//llame a filterdata para buscarlo 
//limpie la interfaz
// y se lo pase a render items para que solo muestre esa tarjeta 
//cuando el usuario de enter
function filterByName()
{
  const inputName = document.getElementById('inputName');
  const inputReceive = inputName.value;
  //usar toUpperCase por si el usuario introduce la primera letra en minuscula
  //seleccionar la primera letra 
  //usar el metodo y guardar el nombre corregido en otra variable
  //pasarle esa ultima variable a la funcion 

  const firstLetter = inputReceive[0].toUpperCase();
  //console.log(firstLetter);
  const inputCorrected= firstLetter + inputReceive.slice(1)
  //console.log(inputCorrected);

  const filteredName = filterData(clonedData, 'name', inputCorrected); //revisar este data
  //console.log(inputName.value);
  clearView();
  renderItems(filteredName);
}
//--------------------------------------------------------------------------------------------------------

//Recordatorio: tener en cuenta los comportamientos por default
//(Cuando presionas la tecla Enter en un formulario, se activa el evento
//de envío del formulario (submit). Si no se previene este comportamiento predeterminado,
//la página se recargará y tu script de JavaScript se reiniciará.)
//decirle que en vez de su comportamiento por default ejecute filterByName
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  filterByName();
});

const inputName = document.getElementById('inputName');
inputName.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filterByName();
  }
});

//-----------------------------------------------------------------------------------------------------------
//Se declara una variable que llama al botón de ordenar
const dropdown = document.getElementById("itemOrder");
//A esa variable se le agrega el evento change
dropdown.addEventListener("change", () => {
  //Se declára una variable con el valor de dropdown aplicandole el metodo selectedIndex
  //el cual indica cuál de las opciones se han seleccionado
  const i = dropdown.selectedIndex;
  //si se selecciona el indice 1
  if (i === 3) {
    clearView();
    renderItems(clonedData);
  } else {
    activeSorting = i;
    clearView();
    sortData(currentData, "id", i);
    renderItems(currentData);
  }
});

//   //si se selecciona el indice 1
//   if (i === 1) {
//     //Actualiza el valor de active sorting a 1
//     activeSorting = i;
//     //Y se ejecuta la funcion sortData a curreantData, usando los ids y con el orden 1 (al derecho a-z) 
//     sortData(currentData, "id", 1);
//     //Se limpia la página
//     clearView();
//     //Y se ejecula la funcion renderItems con current data actualizado
//     renderItems(currentData);
//     //Si se selecciona el indice 2 se ejecuta lo mismo pero con el orden 2 (al reves z-a)
//   } else if (i === 2) {
//     activeSorting = i;
//     sortData(currentData, "id", 2);
//     // console.log("reves");
//     // console.log(descending);
//     clearView()
//     renderItems(currentData);
//   } else if (i === 3) {
//     clearView();
//     renderItems(clonedData);
//   }
// });

//------------------------------------------------------------------------------------------------------------

//Delegacion de eventos
//Funcion para hacer girar las tarjetas
const princContainer = document.getElementById("ulCards");
princContainer.addEventListener("click",(event) => 
{
  const cardContainer= event.target.closest('.card-container');
  if(event.target.matches('.detalles')) 
  {
    turnCard(cardContainer);
  }
  else if (event.target.matches('.regresar')) 
  {
    turnCard(cardContainer); 
  }
});

function turnCard(cardContainer) 
{
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");
  //alterar la propiedad "display" para ocultar y mostrar diferentes partes de la tarjeta
  // Alternar la clase 'hide' entre la parte posterior y frontal de la tarjeta
  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}

//-----------------------------------------------------------------------------------------------------------------
