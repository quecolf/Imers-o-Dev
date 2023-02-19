function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  var trailerDoFilme= document.getElementById('trailer').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  if (filmeFavorito.endsWith('.jpeg')||filmeFavorito.endsWith('.png')||filmeFavorito.endsWith('.jpg')){
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href='+trailerDoFilme+' target=_blank>'+'<img src='+filmeFavorito+'>'+'</a>'
  }
  document.getElementById('filme').value=''
}