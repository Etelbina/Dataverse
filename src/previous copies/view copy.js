import { computeStats } from "./dataFunctions.js";
import { wordSelection } from "./dataFunctions.js";
import { determinarImagen } from "./dataFunctions.js";
export const renderItems = (data) => {
  
  //crear el contenedor y guardarlo en una variable 
  const cardList = document.getElementById("ulCards");

  //iterar en el arreglo (usar for each)
  // por cada elemento se debe crear un li 
  //cada li debe tener la estructura html predefinida 
  //cada li se debe agregar a la ul 
  //insertar el ul completo al dom 
  
  data.forEach(element => {
    //Se crea el elemento li
    const cardItem = document.createElement('li');

    //El elemento li se escribe en el DOM
    cardItem.innerHTML +=`<li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org">
    <article id="front-card" class="front-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org" class="facts">
          <div class="amounts" id="agua">
            <dt itemprop="water-amount" class="amount">Agua</dt>
              <dd>
                <img alt="Gota" id="minimo-agua" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-activa.png?raw=true" >
                <img alt="Gota" id="medio-agua" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-activa.png?raw=true" >
                <img alt="Gota" id="alto-agua" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-inactiva.png?raw=true" >
              </dd>
          </div>
          <div class="amounts" id="luz">
            <dt itemprop="light-amount" class="amount">Luz</dt>
              <dd>
                <img alt="Sol" id="minimo-luz" class="minimo" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-activa.png?raw=true" >
                <img alt="Sol" id="medio-luz"  class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-inactiva.png?raw=true" >
                <img alt="Sol" id="alto-luz" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-inactiva.png?raw=true">
              </dd>
          </div>
          <div class="amounts" id="cuidado">
            <dt itemprop="care-amount" class="amount">Cuidado</dt>
              <dd>
                <img alt="Semaforo" id="minimo-cuidado" class="minimo" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-activa.png?raw=true" >
                <img alt="Semaforo" id="medio-cuidado" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-inactiva.png?raw=true" >
                <img alt="Semaforo" id="alto-cuidado" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-inactiva.png?raw=true" >
              </dd>
          </div>
        </dl>
      </div>
      <p>${element.shortDescription}</p>
      <div class="button-container">
        <button id="detalles" class="detalles">Detalles</button>
      </div>
    </article>
    <article id="back-card" class="hide" class="back-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" class="bachPlantImage" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org">
          <dt class="scientific">${element.scientificName}</dt>
          <dt class="detail">Familia botánica</dt><dd>${element.botanicalFamily}</dd>
          <dt>Lugar de origen</dt><dd>${element.birthPlace}</dd>
        </dl>
      </div>
      <div class="bottom-card">
        <dl id="description">
          <dt class="detail">Usos</dt><dd>${element.applicationsPlant}</dd>
          <dt>Datos climáticos</dt><dd>${element.climaticData}</dd>
          <dt>Mantenimiento</dt><dd>${element.maintenanceNeeds}</dd>
        </dl>
        <div id="icons">
          <div class="stats">
            <img class="stats1" alt="Estadisticas" src="resources/Icons/estadisticas.png">
            <img class="openModalBtn" id="openModalBtn" alt="Descripcion" src="resources/Icons/descripcion.png">
            <div class="back">
            <input type="image" id="Regresar" class="regresar" alt="Regresar"  src="resources/Icons/Regresar.png">
          </div>
        </div>
      </div>
    </article>
    </li>`

    //---------------------------------------------------------------------------------------------------------

    const descriptionModal = document.createElement('div');
    //console.log(descriptionModal);

    descriptionModal.innerHTML+= `<div id="myModal" class="modal"> 
    <div class="modal-content-description">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
    </div>
    </div>`

    //--------------------------------------------------------------------------------------------------------

    const statsModal= document.createElement('div');
    //console.log(statsModal);

    statsModal.innerHTML+= `<div id="myStatsModal" class="statsModal"> 
    <article class="modal-content-stats">
      <h3>${element.categoryPlant}</h3>
      <div class="factLabels">
        <div class="squares">
          <div class="area">
            <div class="square agua"></div>
            <p>Agua</p>
          </div>
          <div class="area">
            <div class="square luz"></div>
            <p>Luz</p>
          </div>
          <div class="area">
            <div class="square cuidado"></div>
            <p>Cuidado</p>
          </div>
        </div>
        <div class="statsTotals">
          <h5 class="agua" id="waterFact"></h5>
          <h5 class="luz" id="lightFact"></h5>
          <h5 class="cuidado" id="careFact"></h5>
        </div>
      </div>
      <h4>Qué cuidados necesita este tipo de plantas?</h4>
    </article>
    </div> `

    //-------------------------------------------------------------------------------------------------------

    //cardItem is created as a child of cardList
    cardList.appendChild(cardItem);
    cardList.appendChild(descriptionModal);
    cardList.appendChild(statsModal);

    //----------------------------------------------------------------------------------------------------------

    const btnOpenModal = document.querySelectorAll('.openModalBtn');
    //console.log(btnOpenModal);
    const btnOpenStatsModal = document.querySelectorAll('.stats1');
    //console.log(btnOpenStatsModal);
    const myModals = document.querySelectorAll('.modal');
    //console.log(myModals);
    const myStatsModals = document.querySelectorAll('.statsModal');
    //console.log(myStatsModals);
    
    btnOpenModal.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        myModals[index].style.display = "block";
      });
    
      document.addEventListener("click", (event) => {
        if (event.target === myModals[index]) {
          myModals[index].style.display = "none";
        }
      });
    });
    
    btnOpenStatsModal.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        myStatsModals[index].style.display = "block";
      });
    
      document.addEventListener("click", (event) => {
        if (event.target === myStatsModals[index]) {
          myStatsModals[index].style.display = "none";
        }
      });
    });

    //------------------------------------------------------------------------------------------------------------
    //llamar a funcion computeStats para hacer el calculo y wordSelection
    //seleccionar donde se va a mostrar la estadistica 
    //insertar el calculo usando innerHTML o textContent

    myStatsModals.forEach((modal) =>{
    
      const averageWater= computeStats(data, "waterAmount");
      const wordWater= wordSelection(averageWater);
      //console.log(averageWater);
      //console.log(wordWater);
  
      const averageLight= computeStats(data, "sunLight");
      const wordLight = wordSelection(averageLight);
      //console.log(averageLight);
      //console.log(wordLight);
  
      const averageCare= computeStats(data, "careDifficulty");
      const wordCare= wordSelection(averageCare);
      //console.log(averageCare);
      //console.log(wordCare);
  
      const agua=modal.querySelector("#waterFact");
      agua.textContent=`${wordWater}`;
      //console.log(agua);
      const luz= modal.querySelector("#lightFact");
      luz.textContent=`${wordLight}`;
      //console.log(luz);
      const cuidado= modal.querySelector("#careFact"); 
      cuidado.textContent=`${wordCare}`;
      //console.log(cuidado);
    })

    //-----------------------------------------------------------------------------------------------------
    const water = element.facts.waterAmount;
    //console.log(water);
    const light = element.facts.sunLight;
    //console.log(light);
    const care = element.facts.careDifficulty;
    //console.log(care);
  
    function actualizarImagenes(fact, firstImage, secondImage, thirdImage, id) {
      const { activo, inactivo } = determinarImagen(id);
  
      if (fact === 1) {
        firstImage.src = activo;
        secondImage.src = inactivo;
        thirdImage.src = inactivo;
      } else if (fact === 2) {
        firstImage.src = activo;
        secondImage.src = activo;
        thirdImage.src = inactivo;
      } else if (fact === 3) {
        firstImage.src = activo;
        secondImage.src = activo;
        thirdImage.src = activo;
      }
      //console.log(actualizarImagenes);
  
    }
  
    // Imagenes.agua
    const firstImageWater = cardItem.querySelector("#minimo-agua");
    //console.log(firstImageWater);
    const secondImageWater = cardItem.querySelector("#medio-agua");
    //console.log(secondImageWater);
    const thirdImageWater = cardItem.querySelector("#alto-agua");
    //console.log(thirdImageWater);
  
    actualizarImagenes(water, firstImageWater, secondImageWater, thirdImageWater, "agua");
  
    // Imagenes.luz
    const firstImageLight = cardItem.querySelector("#minimo-luz");
    //console.log(firstImageLight);
    const secondImageLight = cardItem.querySelector("#medio-luz");
    //console.log(secondImageLight);
    const thirdImageLight = cardItem.querySelector("#alto-luz");
    //console.log(thirdImageLight);
  
    actualizarImagenes(light, firstImageLight, secondImageLight, thirdImageLight, "luz");
  
    // Imagenes.cuidado
    const firstImageCare = cardItem.querySelector("#minimo-cuidado");
    //console.log(firstImageCare);
    const secondImageCare = cardItem.querySelector("#medio-cuidado");
    //console.log(secondImageCare);
    const thirdImageCare = cardItem.querySelector("#alto-cuidado");
    //console.log(thirdImageCare);
  
    actualizarImagenes(care, firstImageCare, secondImageCare, thirdImageCare, "cuidado");

    //------------------------------------------------------------------------------------------------------------

  });
  return cardList;
};