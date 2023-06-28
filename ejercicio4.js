function encontrarNumeroMasPequeno(array) {
    var minimo = array[0];
  
    for (var i = 1; i < array.length; i++) {
      var numero = array[i];
      if (numero < minimo) {
        minimo = numero;
      }
    }
  
    return minimo;
  }
  
  var array = [1, 4, 5, -1, -7, 2, 3, 9];
  var numeroMasPequeno = encontrarNumeroMasPequeno(array);
  console.log(numeroMasPequeno);