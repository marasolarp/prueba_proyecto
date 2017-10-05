function isValidCard(){
    
    var numCard = prompt("ingresa el número de tu tarjeta");// 
    var numInvertido = [];//almaceno los numeros de derecha a izquierda
    for (var i = numCard.length - 1; i >= 0; i--) {//itero la variable para cambiar al reves los numeros que me dio el cliente.
        numInvertido.push(parseInt(numCard[i]));//ingreso los numeros invertidos y los convierte en enteros. 
    }
    for (var j = 1; j < numInvertido.length; j+=2){//recorre el array patra encontrar las posiciones pares 
        var numPares = numInvertido[j]*2;//en esta variable se multiplica el numeri de las posiciones pares *2
        if(numPares >= 10){//verificoque el numero es igual o mayor a 10
            var sumaDeDigitos = numPares -9;//sumo los digitos qu son mayor a 10
            numInvertido[j] = sumaDeDigitos; //y lo devuelvo.
        }else{
            numInvertido[j] = numPares;//ingreso los valores menores a 10
        }
        //resultado, donde voy a sumar los numeros multiplicados y sumados
        var resultado = 0
        for (var i = 0;i < numInvertido.length; i++) {//recorro los procesados
           resultado += numInvertido[i];//sumo cada número a mi resultado.
        }
    }
        if(resultado % 10 === 0){//verifico si es valida la trajeta
           return alert("Tu tarjeta es válida");// retorno el mensaje
        }else{
            return alert("Tu tarjeta no es válida, vuelve a ingresar su número de tarjeta");//sino es,retorno el mensaje
        }

}
isValidCard();