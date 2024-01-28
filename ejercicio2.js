function CalcuarValores(x, y, z) {
    const resultadoSuma = x + y;
    const resultadoMultiplicacion = resultadoSuma * z;
    const resultado = Math.sin(resultadoMultiplicacion);
    return resultado;
    }

console.log(CalcuarValores(10,2,15))    