function checarIdade(idade) {
  return new Promise(function(resolve, reject) {
    if(idade >= 18) {
      resolve('Maior de idade sucess.');
    } else {
      reject('Menor de idade fali.');
    }
  })
}

checarIdade(11)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });