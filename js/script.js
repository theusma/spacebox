fetch('dados.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const elemento = document.createElement('div');
  elemento.className = 'container';
 var x = 0;

  for(let pessoa of json) {

    var item = document.createElement('div');
    item.className = 'item';

    
    if(x == 0){
      item.classList.add("ativo");
    }

    x++;


    item.onclick = function(){
      document.querySelector('.informacoes .idade strong').innerHTML =  this.querySelector('.idade').innerHTML     
      document.querySelector('.informacoes .nome strong').innerHTML =  this.querySelector('.nome').innerHTML   
      document.querySelector('.informacoes .cargo strong').innerHTML =  this.querySelector('.cargo').innerHTML   
      document.querySelector('.mostraItem .imagem img').setAttribute("src", this.querySelector('.foto').getAttribute('src'));
      

    };



    //item.onclick = function(){console.log(this)};
    document.getElementsByTagName('body')[0].appendChild(item);

    var foto = document.createElement('div');
    foto.className = 'mascaraImagem imagem';
    document.getElementsByTagName('body')[0].appendChild(foto);

    var id = document.createElement('p');
    id.className = 'numeroId';
    id.innerHTML = pessoa.id;
    document.getElementsByTagName('body')[0].appendChild(id);

    var idade = document.createElement('p');
    idade.className = 'idade';
    idade.innerHTML = pessoa.idade;
    document.getElementsByTagName('body')[0].appendChild(idade);

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
    item.appendChild(idade);
    item.appendChild(foto);
    foto.appendChild(img);
    item.appendChild(nome);
    item.appendChild(cargo);
  }


  const resultado = document.querySelector('.resultado');
  resultado.appendChild(elemento);
}

