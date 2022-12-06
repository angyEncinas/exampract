function dividirFrase(frase) {
  var resultado ="";
  var copia = frase;
  var inicial = copia.split(" ");
  let result = inicial.filter((item,index)=>{
    return inicial.indexOf(item) === index;
  })
  for(var i=0;i<result.length;i++){
    var ch = result[i];
    var count = frase.split(ch).length - 1;
    resultado = resultado + result[i] + ": "+count+"  ";

  }
  
  return resultado;

}

export default dividirFrase;
