/**
 * 
 *  ==> Mudando para arquivo JS
 * 
 */


var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

// Desafio 01
function stringDataObject(endereco) {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf} no bairro ${endereco.bairro} na rua ${endereco.rua} com rua ${endereco.numero}`;
}

// Desafio 2
function numeroParOuImpa(numero) {
  return numero % 2 == 0 ? 'Par': 'Impar';
}

// Desafio 3
function temHabilidade(skills) {
  return skills.includes('Javascript');
}

// Desafio 4
function experiencia(anos) {
  var retorno = '';
  if (anos >= 0 && anos <= 1) {
    retorno = 'Iniciante';
  } else if (anos > 1 && anos <= 3) {
    retorno = 'Intermediário';
  } else if (anos > 3 && anos <= 6) {
    retorno = 'Avançado';
  } else {
    retorno = 'Jedi Master';
  }

  return retorno;
  
}


var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function devsHabilidades(usuarios) {
  usuarios.map(user => {
    console.log(`O ${user.nome} possui habilidades: ${user.habilidades}`);
  }
  )
}

function chamar() {
  devsHabilidades(usuarios);
  
  console.log(experiencia(2));
  
  
  var skills = ["Javascript", "ReactJS", "React Native"];
  const resposta = temHabilidade(skills); // true ou false
  
  console.log(resposta);
  
  console.log(numeroParOuImpa(12));
  
  const resultado = stringDataObject(endereco);
  
  if (resposta) {
    console.log('Tem habilidades com JavaScript');
  } else {
    console.log('Não tem habilidades com JavaScript');
  }
}

chamar();