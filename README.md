<div style="display: flex; flex-direction:column; justify-content: center; align-items: center;">
  <div style="display: flex; flex-direction: row; align-items: center;">
    <img src="src/resources/Icons/Logo.png" width="50" height="50"> 
    <h1 style="text-align: center; margin-left: 10px;">My Beauty Plant</h1>
  </div>
    <!-- <p align="left" style="margin-top:50px;">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p> -->
</div>


## Índice

* [1. Descripción del Proyecto](#1-descripción-del-proyecto)
* [2. Características Destacadas 📌](#2-características-destacadas-📌)
* [3. Demostración](#3-demostración)
* [4. Tecnologías y Herramientas Utilizadas](#4-tecnologías-y-herramientas-utilizadas)
* [5. Enfoque de Desarrollo](#5-enfoque-de-desarrollo)
* [6. Prototipos](#6-prototipos)
* [7. Desarrolladoras](#7-desarrolladoras)
* [8. Conclusión](#8-conclusión)

***

## 1. Descripción del Proyecto
   <p align="left" style="margin-top:50px;">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p> 

<p style="text-align:justify">Nuestra aplicación web aborda la inquietud común sobre el cuidado de las plantas, ofreciendo respuesta a preguntas frecuentes, como frecuencia de riego, ubicación ideal, técnicas de poda, etc. Lo que distingue* a nuestra aplicación es su enfoque en simplificar el cuidado, proporcionando a los usuarios una guía intuitiva y estéticamente agradable.</p>

<p style="text-align:justify">Debido a la creciente tendencia de tener plantas en casa sin comprender completamente sus necesidades, iniciamos este proyecto como parte del bootcamp de Laboratoria. Para el futuro, planeamos expandir la aplicación incorporando datos más detallados y permitiendo a nuestros usuarios encontrar la planta perfecta según su estilo de vida y preferencias personales, a fin de brindarles una guia completa para el cuidado de sus plantas.</p>

## 2. Características Destacadas 📌

- Exploración Intuitiva: Navega sin problemas entre categorías para encontrar la planta perfecta, incluso si no tienes una variedad específica en mente. Encuentra tu planta ideal según su propósito o características deseadas.

- Búsqueda y Ordenación: Encuentra rápidamente la planta que buscas utilizando la función de búsqueda por nombre. Además, organiza el contenido según tus preferencias, facilitando la ubicación de la información que necesitas.

- Visualización Rápida de Cuidado: la función de visualización te permitira identificar fácilmente la dificultad de cuidado de una planta, así como sus necesidades de agua y exposición solar en una escala simple.

- Estadísticas por Categoría: Obtén una visión general de los requerimientos comunes dentro de una categoría para tomar decisiones más informadas.

- Descripciones Detalladas: Explora descripciones completas que proporcionan datos fascinantes sobre la planta seleccionada. Aprende más allá de los aspectos básicos y descubre información interesante para enriquecer tu experiencia con la planta.

## 3. Demostración 

![gif](https://github.com/Joseline0609/dataverse/assets/151554917/13ec97b8-7a1b-4ed3-ba5b-911b7d1749a1)


## 4. Tecnologías y Herramientas Utilizadas 

### Proceso de Generación de Datos con IA

La información y las imágenes fueron generadas mediante inteligencia artificial utilizando prompts, y posteriormente, las imágenes fueron mejoradas y detalladas utilizando recursos como Canva. Este enfoque combinado de tecnologías de IA y herramientas de diseño permitió crear contenido informativo y visualmente atractivo.

```javascript
// Ejemplo de cómo se utilizó un prompt con OpenAI GPT-3 para obtener información sobre cuidado de plantas.
const prompt = "Hola, estoy trabajando en un proyecto y como requisito los datos a usar deben ser generados por IA. Necesito un set de objetos dentro de un arreglo en formato JSON. El arreglo debe contener 24 objetos con información sobre plantas específicas que indicaré. La plantilla sería la siguiente {plantilla}";

const response = openAI.generate(prompt, "Entiendo, necesitas un conjunto de datos en formato JSON para 24 plantas diferentes, siguiendo la plantilla que proporcionaste. Para cada planta, se requiere información específica como su nombre, descripción, imagen, y datos adicionales. Dado que necesitas información detallada y precisa para cada planta, puedo comenzar generando datos de ejemplo para una variedad de plantas. Podrías proporcionar la lista de las 24 plantas específicas sobre las que necesitas información?. Esto me ayudará a crear un set de datos más personalizado y útil para tu proyecto.");
// Se envía la lista
//continúa
console.log(response);
```

### HTML5
```html
<!-- La base del contenido se construyó utilizando HTML5, garantizando una estructura semántica y accesible. -->
<div class="dropdown"> 
  <label for="itemOrder" id="order" class="dropbtn">Orden</label>
    <select name="order" id="itemOrder">
      <option value="order">Orden</option>
      <option value="a-z">A - Z</option>
      <option value="z-a">Z - A</option>
      <option value="seeAll">Reset all</option>
    </select>
</div>
```

### CSS
```css
/* La presentación visual y el estilo se lograron con CSS, asegurando una interfaz atractiva y amigable. */
.search-container input{
    width: 150px;
    height: 25px;
    padding: 5px;
    font-size: small;
    font-weight: bold;
    border-radius: 5px;
    border: #8A988C solid .5px;
    box-shadow: 1px 1px 5px gray;
}
```

### JavaScript
```js
// Se implementaron funcionalidades interactivas utilizando JavaScript puro, mejorando la experiencia del usuario.
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
  });
});
```

### Pruebas con Jest
```javascript
// Jest se utilizó para garantizar la calidad y confiabilidad del código.
//Ejemplo de filtrado por id
describe('filterData', () => {
it ('returns an array with filtered data by id', () => {
    const result = filterData(fakeData, "id", "roble");
    expect(result).toEqual([
      {
        "id": "roble",
        "categoryPlant":"trees",
        "name": "Roble",
        "maintenanceNeeds": "Requiere espacio para crecer, poco mantenimiento una vez establecido.",
        "scientificName": "Quercus",
        "applicationsPlant": "Construcción, muebles, barriles para vino.",
        "climaticData": "Adaptable a diversos climas, prefiere suelos profundos.",
      },
    ])
  })
});
```

### Prototipos
### Figma
Se utilizó Figma para la creación de prototipos (tanto de baja, media y alta fidelidad), permitiendo una planificación detallada de la interfaz de usuario y una colaboración eficiente entre los miembros del equipo.

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=58-3&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Baja Fidelidad</a>

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=137-500&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Media Fidelidad</a>

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=202-807&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Alta Fidelidad</a>


### Canva
Canva se empleó para mejorar y detallar las imágenes generadas por IA, proporcionando herramientas visuales adicionales para perfeccionar el contenido, asi como para crear prototipos de baja fidelidad.
![canva](src/resources/Readme-Images/canva.png)

### Organización
La organización del proyecto se gestionó utilizando Notion y Trello, plataformas colaborativas que facilitaron la planificación, el seguimiento y la comunicación eficaz entre los miembros del equipo.

### Notion 
![Alt text](src/resources/Readme-Images/notion.png)

### Trello 
![alt text](src/resources/Readme-Images/trello.png)


### Testeos de Usabilidad
Se llevaron a cabo testeos de usabilidad para evaluar la eficacia y la experiencia del usuario. Estos procesos de prueba garantizaron que la aplicación fuera intuitiva y cumpliera con los objetivos previstos, proporcionando retroalimentación valiosa para mejoras continuas. Dentro de esta mejoras destacamos:

- Reubicación del Menú en Dispositivos Móviles: Tras observar dificultades de navegación en dispositivos móviles, movimos el menú de la parte superior a la inferior en el prototipo móvil, lo que optimizó la accesibilidad y la experiencia de usuario en estos dispositivos.

- Refinamiento del Diseño de Tarjetas y Utilización de Modales: Para evitar que la parte posterior de las tarjetas se viera sobrecargada, parte de la información se trasladó a modales emergentes, lo que mejoró la organización y legibilidad del contenido.

- Optimización de los Tamaños y Diseño de Elementos: Se realizaron ajustes en los tamaños de los elementos y en el diseño de ciertos botones para mejorar la usabilidad y claridad de la función que realizan (por ejemplo, al botón que abre el modal de estadísticas se le agregó la imagen de una mini gráfica). 

- Ajuste de Colores en los Modales: Después de recibir comentarios de los usuarios sobre la legibilidad, se modificaron los colores de las letras en los modales para mejorar la visibilidad y facilitar la lectura.

### Historias de Usuario 

El proyecto se consideró finalizado una vez que se completaron exitosamente las seis historias de usuario establecidas. Se incluye la plantilla de la primera historia como referencia y ejemplo para el desarrollo y la implementación de las demás funcionalidades.

> Yo como: Clienta interesada en adquirir plantas.
> 

> Quiero: Ver el catálogo de plantas en línea.
> 

> Para: Poder visualizar las opciones disponibles y tomar decisiones de compra sin necesidad de visitar la tienda física.
> 
- Definici**ó**n de terminado
    
    La clienta puede acceder al catálogo en línea y navegar fácilmente por las opciones disponibles.
    
- Criterios de aceptación
    La interfaz debe contener:

    Elementos de HTML

    Un header

            [x]  Nombre de la tienda
            [x]  Logo de la tienda

    Un  aside

            [x]  Cinco iconos uno para cada categoria.
            [x]  Seccion de filtro para ordenar alfabéticamente.
            [x]  Cuadro de búsqueda por nombre.

    Cuerpo de página

    Tarjetas de plantas

              Front

                [x]  Nombre de planta
                [x]  Imagen de planta
                [x]  Información sobre requerimientos de Luz
                [x]  Información sobre requerimientos de Cuidado
                [x]  Información sobre requerimientos de Riego
                [x]  Botón para leer más detalles.

    Footer

            [x]  Informacion estática sobre el desarrollo.

    Estilo CSS aplicado para mejorar la presentación de la página y las tarjetas de plantas.

            [x]  Aplicados a los elementos mencionados de acuerdo al prototipo.

    Funcionalidad de JavaScript para mostrar las tarjetas de plantas en el DOM, enlazando los datos proporcionados.

            [x]  Los datos deben estar en el formato correcto.
            [x]  Importación de datos en el archivo principal.
            [x]  Creación dinámica de las tarjetas de plantas.

## 5. Enfoque de Desarrollo
"My Beauty Plant" se ha gestado bajo un enfoque de desarrollo que abarca más allá de la elección de tecnologías. Aspectos importantes de nuestro enfoque incluyen:

- Centrado en el Usuario: Desde la concepción hasta la implementación, hemos priorizado las necesidades y la experiencia del usuario para garantizar una aplicación intuitiva y útil.

- Colaboración Eficiente: La colaboración fluida entre los miembros del equipo se facilitó mediante herramientas como Notion y Trello. La comunicación efectiva fue clave para el progreso constante del proyecto.

- Iteraciones Continuas: Se adoptó un enfoque iterativo, permitiendo la mejora constante a través de ciclos de retroalimentación. La aplicación evolucionó a medida que recibíamos comentarios de usuarios y desarrolladores.

- Flexibilidad y Adaptabilidad: La arquitectura y el diseño se concebieron con la capacidad de adaptarse a futuras expansiones y mejoras, brindando flexibilidad para evolucionar con las necesidades cambiantes.

## 6. Prototipos
### Prototipos de Baja Fidelidad 
![Alt text](src/resources/Readme-Images/baja-fidelidad.png)

### Prototipos de Media Fidelidad 
![Alt text](src/resources/Readme-Images/media-fidelidad.png)

### Prototipos de Alta Fidelidad 
![alt text](src/resources/Readme-Images/alta-fidelidad.png)

## 7. Desarrolladoras

Con 💛 de <a href="https://www.linkedin.com/in/etelbina-ca%C3%B1edo-507baa1b5/">Etelbina Cañedo</a> & <a href="https://www.linkedin.com/in/joseline-garc%C3%ADa-0053521b2/">Joseline García</a>.

## 8. Conclusión
<p style="text-align:justify">"My Beauty Plant" representa nuestra dedicación para simplificar el cuidado de las plantas mediante una aplicación intuitiva y visualmente atractiva. A lo largo del proyecto, hemos fusionado inteligencia artificial con herramientas de diseño para crear contenido informativo y estéticamente agradable.</p>

<p style="text-align:justify">Mirando hacia adelante, planeamos expandir la aplicación, proporcionando aún más datos detallados y ayudando a los usuarios a encontrar la planta perfecta según sus preferencias. Agradecemos a todos por ser parte de esta experiencia verde y esperamos que "My Beauty Plant" continúe siendo una guía confiable para los amantes de las plantas.</p>


