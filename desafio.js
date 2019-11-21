function exercicioOne() {
  function checarIdade(idade) {
    return new Promise(function(resolve, reject) {
      if(idade >= 18) {
        resolve('Maior de idade sucess.');
      } else {
        reject('Menor de idade fali.');
      }
    })
  }

  checarIdade(23)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.warn(error);
    });
}


async function getRepos(user) {
  return await axios.get(`https://api.github.com/users/${user}/repos`);
} 

function renderListRepos() {
  var listElemento = document.querySelector('ul');

  listElemento.innerHTML = '';

  var user = document.querySelector('input[name=user]').value; 
  var res = getRepos(user);

  res 
    .then(function(response) {
      
      
      
      response.data.map(r => {
        var reposElemento = document.createElement('li');
        var text = document.createTextNode(r.full_name);
        reposElemento.appendChild(text);
        listElemento.appendChild(reposElemento);
      })
      
     
    })
    .catch(function(error) {
      console.warn(error);
    });

}

  