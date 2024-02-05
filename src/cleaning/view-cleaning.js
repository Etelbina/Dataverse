//----------------------
/**
* This function receives a plant model and extract the fact information
* rendering depending of the value found in the model
*
* @param { card } plant - The plant model that contains the info
* @param { HTML element } cardItem - The card that represents UI the element inside the DOM 
*/
export const renderFactImages = (plant, cardItem) => {
  // Create static elements
  const waterActiveImage = document.createElement("img");
  waterActiveImage.alt="Gota";
  waterActiveImage.src="resources/Icons/agua-activa.png";
  
  const waterActiveImage2 = document.createElement("img");
  waterActiveImage2.alt="Gota";
  waterActiveImage2.src="resources/Icons/agua-activa.png";

  const waterActiveImage3 = document.createElement("img");
  waterActiveImage3.alt="Gota";
  waterActiveImage3.src="resources/Icons/agua-activa.png";

  const lightActiveImage = document.createElement("img");
  lightActiveImage.alt="Luz";
  lightActiveImage.src="resources/Icons/luz-activa.png";
  
  const lightActiveImage2 = document.createElement("img");
  lightActiveImage2.alt="Luz";
  lightActiveImage2.src="resources/Icons/luz-activa.png";

  const lightActiveImage3 = document.createElement("img");
  lightActiveImage3.alt="Luz";
  lightActiveImage3.src="resources/Icons/luz-activa.png";

  const careActiveImage = document.createElement("img");
  careActiveImage.alt="Semaforo";
  careActiveImage.src="resources/Icons/cuidado-activa.png";

  const careActiveImage2 = document.createElement("img");
  careActiveImage2.alt="Semaforo";
  careActiveImage2.src="resources/Icons/cuidado-activa.png";

  const careActiveImage3 = document.createElement("img");
  careActiveImage3.alt="Semaforo";
  careActiveImage3.src="resources/Icons/cuidado-activa.png";

  // 1 - Iterar en data forEach
  // 2 - Get facts by type
  const waterAmount = plant.facts.waterAmount;
  const sunLight = plant.facts.sunLight;
  const careDifficulty = plant.facts.careDifficulty;

  const waterArea = cardItem.querySelector(".water-icons");
  document.getElementById('water');

  // 3 - condicionales
  // 3.1 repetir por fact
  // 3.2 water facts
  if (waterAmount === 1) {
    //4 dibujar 1 activa 2 inactivas
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2); //anadir clase
    waterActiveImage2.className="inactive";
    waterArea.appendChild(waterActiveImage3); //anadir clase
    waterActiveImage3.className="inactive";
  } else if (waterAmount === 2) {
    //4 dibujar 2 activas 1 inactiva
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterArea.appendChild(waterActiveImage3); //anadir clase
    waterActiveImage3.className="inactive";
  } else if (waterAmount === 3) {
    //4 dibujar 3 activas
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2); 
    waterArea.appendChild(waterActiveImage3);
  }

  //Repeat for Light amount
  const lightArea = cardItem.querySelector(".light-icons");
  document.getElementById('light');

  if (sunLight === 1) {
    lightArea.appendChild(lightActiveImage);
    lightActiveImage2.className="inactive";
    lightArea.appendChild(lightActiveImage2);
    lightActiveImage3.className="inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 2) {
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2);
    lightActiveImage3.className="inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 3) {
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2);
    lightArea.appendChild(lightActiveImage3);
  }

  //Repeat for Care amount
  const careArea = cardItem.querySelector(".care-icons");
  document.getElementById('care');

  if (careDifficulty === 1) {
    careArea.appendChild(careActiveImage);
    careActiveImage2.className="inactive";
    careArea.appendChild(careActiveImage2);
    careActiveImage3.className="inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 2) {
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2);
    careActiveImage3.className="inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 3) {
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2);
    careArea.appendChild(careActiveImage3);
  }
}

//----------------------
/**
 * This function creates card list that contains
 * every card,
 * icon butons area,
 * and modals
 * 
 * @param { [every plant] } data - From dataset
 * 
 * @returns cardList
 */
export const renderItems = (data) => {
  // Creating list, container to host all the cards
  const cardList = document.getElementById("ul-cards");
  
  //Iterates for each element of the object from data
  data.forEach(element => {

    //Creating all buttons
    const statisticsButton = document.createElement('img');
    statisticsButton.className="modal-statistics-button";
    statisticsButton.alt="Estadísticas";
    statisticsButton.src="resources/Icons/estadisticas.png";
    statisticsButton.id=element.categoryPlant;

    const descriptionButton = document.createElement('img');
    descriptionButton.className="modal-description-button";
    descriptionButton.alt="Descripcion";
    descriptionButton.src="resources/Icons/descripcion.png";
    descriptionButton.id=element.id;

    const backButton = document.createElement("img");
    backButton.id = "flip-button";
    backButton.className = "flip-button";
    backButton.alt = "Regresar";
    backButton.src = "resources/Icons/Regresar.png";

    //Creting the li element to represent the plant as UI card
    const cardItem = document.createElement('li');

    //Card item creation, every card represents a plant from the data. 
    cardItem.className="card-container " + element.categoryPlant;
    cardItem.setAttribute("itemscope", "");
    cardItem.setAttribute("itemtype", "https://schema.org");
    cardItem.innerHTML +=`
            <!-- Front card funciona -->
            <article class="front-card" id="front-card">
              <h2>${element.name}</h2>
              <div class="top-card">
                <img alt="Plant Name" src="${element.imageUrl}">
                <dl itemscope itemtype="https://schema.org" class="facts">
                  <div class="amounts" id="water">
                    <dt class="amount" id="water-amounts">Agua</dt>
                    <dd class="water-icons">
                      
                    </dd>
                  </div>
                  <div class="amounts" id="light">
                    <dt class="amount" id="water-amounts">Luz</dt>
                    <dd class="light-icons">
                      
                    </dd>
                  </div>
                  <div class="amounts" id="care">
                    <dt class="amount" id="water-amounts">Cuidado</dt>
                    <dd class="care-icons">
                      
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="botom-card">
                <p>${element.shortDescription}</p>
                <button class="details-button" id="details-button">Detalles</button>
              </div>
            </article>
            <!-- Back card, top funciona, icons y botom card-->
            <article id="back-card" class="hide">
              <h2>${element.name}</h2>
              <div class="top-card">
                <img alt="Plant Name" src=${element.imageUrl}>
                <dl itemscope itemtype="https://schema.org">
                  <dt class="scientific-name">${element.scientificName}</dt>
                  <dt>Familia botánica</dt><dd>${element.botanicalFamily}</dd>
                  <dt>Lugar de origen</dt><dd>${element.birthPlace}</dd>
                </dl>
              </div>
              <div class="bottom-card">
                <dl id="description">
                  <dt>Usos</dt><dd>${element.applicationsPlant}</dd>
                  <dt>Datos climáticos</dt><dd>${element.climaticData}</dd>
                  <dt>Mantenimiento</dt><dd>${element.maintenanceNeeds}</dd>
                </dl>
              </div>
              <div id="icons">
              </div>
            </article>`

    //Plant card UI respresentation is ready to add to the list
    cardList.appendChild(cardItem);
    //Creates the images for facts representation
    renderFactImages(element, cardItem);
    
    //Add icons area to the reverse card that contains
    //stats, description and reverse buttons
    const icons = cardItem.querySelector("#icons");
    document.getElementById('icons');
    icons.appendChild(statisticsButton);
    icons.appendChild(descriptionButton);
    icons.appendChild(backButton);
  });

  // Modal containers creation
  const modalsContainer = document.createElement('div');
  modalsContainer.className="modal-boxes";

  // Creating description modal
  const descriptionModal = document.createElement('dialog');
  descriptionModal.id="description-modal";
  descriptionModal.className="description-modal";
  descriptionModal.innerHTML+= ` 
            <h3 id="plant-name-modal"></h3>
            <p id="plant-description-modal"></p>
            <img class="close-button" alt="Cerrar" src="resources/Icons/Close.png">`

  // Creating stats Modal
  const statsModal= document.createElement('dialog');
  statsModal.id="statistics-modal";
  statsModal.className="statistics-modal";
  statsModal.innerHTML+=`
            <h3 id="plant-category-modal">Plant Category</h3>
            <div class="statistics">
              <div class="graph-legend">
                <div class="legend">
                  <div class="square water"></div>
                  <p>Agua</p>
                </div>
                <div class="legend">
                  <div class="square light"></div>
                  <p>Luz</p>
                </div>
                <div class="legend">
                  <div class="square care"></div>
                  <p>Cuidado</p>
                </div>
              </div>
              <div class="statistics-totals">
              </div>
            </div>
            <h4>Qué cuidados necesita este tipo de plantas?</h4>
            <img class="close-button-stats" alt="Cerrar" src="resources/Icons/Close.png">`

  //Adding the modals to the card
  modalsContainer.appendChild(descriptionModal);
  modalsContainer.appendChild(statsModal);
  
  //Modals are added outside the UI card representation
  cardList.insertAdjacentElement("afterend", modalsContainer);

  //Returns all created elements
  return cardList;
}