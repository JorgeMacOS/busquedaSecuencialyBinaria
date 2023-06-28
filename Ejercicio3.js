function encontrarNumeroMasGrande(array) {
    var maximo = array[0];
  
    for (var i = 1; i < array.length; i++) {
      var numero = array[i];
      if (numero > maximo) {
        maximo = numero;
      }
    }
  
    return maximo;
  }
  
  var array = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
  var numeroMasGrande = encontrarNumeroMasGrande(array);
  console.log(numeroMasGrande);