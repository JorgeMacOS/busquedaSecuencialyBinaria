function encontrarNumeroMasRepetido(array) {
    var contador = {};
  
    for (var i = 0; i < array.length; i++) {
      var numero = array[i];
      if (contador[numero] === undefined) {
        contador[numero] = 1;
      } else {
        contador[numero]++;
      }
    }
  
    var numeroMasRepetido;
    var maxRecuento = 0;
    for (var numero in contador) {
      if (contador[numero] > maxRecuento) {
        maxRecuento = contador[numero];
        numeroMasRepetido = numero;
      }
    }
  
    return numeroMasRepetido;
  }

  var array = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
  var numeroMasRepetido = encontrarNumeroMasRepetido(array);
  console.log(numeroMasRepetido);