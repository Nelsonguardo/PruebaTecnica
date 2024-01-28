function numerosImparesHastaN(numero) {
   
    if (numero <= 0 || !Number.isInteger(numero)) {
      return "Por favor, ingrese un número entero positivo.";
    }
  
    let impares = [];
  
    for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
    }
  
    if (numero % 2 === 0) {
      impares.push(numero);
    }
  
    return impares;
  }
  
  const resultado = numerosImparesHastaN(15);
  console.log(resultado); 
  
  
  