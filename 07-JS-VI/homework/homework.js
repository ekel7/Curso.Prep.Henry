// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb();

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  /*
  Method uan
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  var suma = numeros.reduce(reducer);
  cb(suma);
  */
 // two
 var suma = numeros.reduce(function(accumulator, currentValue){
   return accumulator + currentValue;
 });
 cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  function ahre(item){  
    cb(item);
  }
  array.forEach(ahre);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var newArray = [];
  function funEach(item, index){
    cb(item);
    newArray.push(cb(item));
  }
  array.forEach(funEach);
  return newArray;
  

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
