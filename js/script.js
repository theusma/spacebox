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
    document.getElementsByTagName('body')[0].appendChild(item);
    
    if(x == 0){
      item.classList.add("ativo");
    }
    x++;
    item.onclick = function(){
      document.querySelector('.informacoes .idade strong').innerHTML =  this.querySelector('.idade').innerHTML     
      document.querySelector('.informacoes .nome strong').innerHTML =  this.querySelector('.nome').innerHTML   
      document.querySelector('.informacoes .cargo strong').innerHTML =  this.querySelector('.cargo').innerHTML   
      document.querySelector('.mostraItem .imagem img').setAttribute("src", this.querySelector('.foto').getAttribute('src'));
      document.querySelector(".ativo").classList.remove("ativo");
      

      this.classList.add("ativo");

    };
    //ADICIONA  UMA DIV QUE TODOS ELEMENTOS DA IMAGEM 
    var imagem = document.createElement('div');
    imagem.className = 'todaImagem';
    document.getElementsByTagName('body')[0].appendChild(imagem);

    //ADICIONA  UM DIV QUE ENGLOBA A IMAGEM A CLASS  mascaraImagem
    var foto = document.createElement('div');
    foto.className = 'mascaraImagem';
    document.getElementsByTagName('body')[0].appendChild(foto);
 
    //ADICIONA  UMA TAG IMG COM A CLASS  FOTO
    var img = document.createElement("img");
    img.className = 'foto';
    img.src = 'images/' + pessoa.foto;
    document.getElementsByTagName('body')[0].appendChild(img);

    //ADICIONA  UM P COM A CLASS  numeroId
    var id = document.createElement('p');
    id.className = 'numeroId';
    id.innerHTML = pessoa.id;
    document.getElementsByTagName('body')[0].appendChild(id);
    
    //ADICIONA  UM P COM A CLASS  idade
    var idade = document.createElement('p');
    idade.className = 'idade';
    idade.innerHTML = pessoa.idade;
    document.getElementsByTagName('body')[0].appendChild(idade);

    //ADICIONA  UMA DIV QUE ENGLOBA 2 ELEMENTOS 
    var texto = document.createElement('div');
    texto.className = 'texto';
    document.getElementsByTagName('body')[0].appendChild(texto);

    //ADICIONA  UM P COM A CLASS  nome
    var nome = document.createElement('p');
    nome.className = 'nome';
    nome.innerHTML = pessoa.nome;
    document.getElementsByTagName('body')[0].appendChild(nome);

    //ADICIONA  UM P COM A CLASS  cargo
    var cargo = document.createElement('p');
    cargo.className = 'cargo';
    cargo.innerHTML = pessoa.cargo;
    document.getElementsByTagName('body')[0].appendChild(cargo);


   //MOSTRA TODOS OS ELEMENTOS CRIADOS ACIMA NA TELA
    elemento.appendChild(item);
    item.appendChild(imagem);
    imagem.appendChild(foto);
    item.appendChild(id);
    item.appendChild(idade);
    foto.appendChild(img);
    item.appendChild(texto);
    texto.appendChild(nome);
    texto.appendChild(cargo);
  }


  const resultado = document.querySelector('.resultado');
  resultado.appendChild(elemento);
}

