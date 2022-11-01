
function factorial(n, previousVal= []){
  if(previousVal[n] !== undefined) return previousVal[n]
  else if(n=== 1) return 1;
  else{
    result= n*factorial(n-1);
    previousVal[n]= result; 
    return previousVal[n];
  }
}

console.log(factorial(5))



/* 
//EJEMPLO ANTERIOR PERO PREGUNTANDO SI NO HAY VALOR
function factorial(n, previousVal= []){
  if(previousVal[n]== undefined){
    if(n=== 1) return 1;
    result= n*factorial(n-1);
    previousVal[n]= result; 
    return result;
  }
  return factorial[n]
  
}*/





/* 
//EJEMPLO REALIZANDO EL FACTORIAL CON EL MEMOIZE AVANZADO
const memoize = (func) => {
  const results = {};
  return (...args) => {
    if (!results[args]) {
      results[args] = func(args);
    }
    return results[args];
  };
};

let factorial= memoize(n=>{
  if(n <= 1) return 1;
  else{
    result= n*factorial(n-1);
    return result;
  }
})

console.log(factorial(5))
 */