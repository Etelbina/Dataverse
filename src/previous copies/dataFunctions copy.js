/* 
//por cada objeto(elemento del arreglo) hacer la comparacion de si la propiedad por que esta siendo filtrada tiene el valor buscado 
//ejemplo, si se esta filtrando por categoria, esta corresponde al "campo" es decir "filterBy"
//el value seria el valor de esa propiedad especifica (ejemplo "ornamental")
//si coincide retornara true y se guardara en el nuevo array
*/

export const filterData = (data, filterBy, value) => {
  return data.filter(objeto => objeto[filterBy] === value);
};
//---------------------------------------------------------------------------------------------------------------------------

/*export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function(a,b) {

    if (sortOrder === 1) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 2) {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
};*/

/*export const sortData = (data, sortBy, sortOrder) => {
  return data.sort()

};
*/

export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function(a,b){
    if (sortOrder === 1) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 2) {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
}
//------------------------------------------------------------------------------------------------------------------

/*`computeStats(data)`: la función`compute`o calcular, nos permitirá hacer cálculos estadísticos básicos 
para ser mostrados de acuerdo a la data proporcionada, 
esta función debe usar el método reduce.
*/

//Acceder a los valores de los facts 
//crear variable con un array vacio 
//usar forEach para iterar y crear una funcion que encuentre el valor de la propiedad requerida y lo guarde en el array
//iterar sobre el array con for y retornar la suma 
//guardar la suma en una variable promedio y dividir la suma entre el total de objetos
//retornar el promedio redondeado al entero mas cercano
export const computeStats =(data, propiedadDeseada) => {
  const propertyValues=[];

  data.forEach(object => {
    //acceder a la propiedad
    const factToExtract = object.facts[propiedadDeseada];
    //agregar el resultado al array
    propertyValues.push(factToExtract);
  });

  const suma = propertyValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const promedio = suma/data.length;
  
  return Math.round(promedio);
};

//-------------------------------------------------------------------------------------------------------------

//en vez de el numero entero que se muestre (poca, medio,mucha)
//funcion para determinar la palabra que debe
//recibir el promedio y dependiendo de este me retorna la palabra
export const wordSelection = function (promedio){
  if (promedio===1){
    return "Poca";
  }
  else if(promedio===2){
    return "Regular";
  }
  else if(promedio===3){
    return "Mucha";
  }
  return wordSelection;
}

//--------------------------------------------------------------------
export function determinarImagen(id) {
  let activo;
  let inactivo;

  if (id==="agua") {
    activo = "resources/Icons/agua-activa.png";
    inactivo = "resources/Icons/agua-inactiva.png";
  } else if (id==="luz") {
    activo = "resources/Icons/luz-activa.png";
    inactivo = "resources/Icons/luz-inactiva.png";
  } else if (id==="cuidado") {
    activo = "resources/Icons/cuidado-activa.png";
    inactivo = "resources/Icons/cuidado-inactiva.png";
  }
  return { activo, inactivo };
}

//---------------------------------------------------------------------------------------------
