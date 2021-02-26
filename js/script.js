fetch('dados.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const elemento = document.createElement('div');
  elemento.className = 'container';

  for(let pessoa of json) {

    var item = document.createElement('div');
    item.className = 'item';
    item.onclick = function(){};
    document.getElementsByTagName('body')[0].appendChild(item);

    
    foto.className = 'mascaraImagem imagem';
    var foto = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(foto);

    var id = document.createElement('p');
    id.className = 'numeroId';
    id.innerHTML = pessoa.id;
    document.getElementsByTagName('body')[0].appendChild(id);

    var img = document.createElement("img");
    img.className = 'foto';
    img.src = 'images/' + pessoa.foto;
    document.getElementsByTagName('body')[0].appendChild(img);
   
    var nome = document.createElement('p');
    nome.className = 'nome';
    nome.innerHTML = pessoa.nome;
    document.getElementsByTagName('body')[0].appendChild(nome);

    var cargo = document.createElement('p');
    cargo.className = 'cargo';
    cargo.innerHTML = pessoa.cargo;
    document.getElementsByTagName('body')[0].appendChild(cargo);
   
    elemento.appendChild(item);
    item.appendChild(id);
    item.appendChild(foto);
    foto.appendChild(img);
    item.appendChild(nome);
    item.appendChild(cargo);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(elemento);
}
