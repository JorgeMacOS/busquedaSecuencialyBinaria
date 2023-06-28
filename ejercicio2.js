function encontrarLetras(array) {
    var letras = [];
  
    for (var i = 0; i < array.length; i++) {
      var elemento = array[i];
      if (typeof elemento === 'string') {
        letras.push(elemento);
      }
    }
  
    return letras;
  }
  
  var array = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
  var letrasEncontradas = encontrarLetras(array);
  console.log(letrasEncontradas); 