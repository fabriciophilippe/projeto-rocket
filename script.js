function toggleMode() {
  const html = document.documentElement
  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem 
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute('src', './imagens/avatar-light.png')
     img.setAttribute( 'alt', 'Foto de Mayk Brito sorrindo, usando óculos escuro e jaqueta preta')
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute('src', './imagens/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk brito sorrindo, usando oculos e camisa preta e fundo amarelo')
  }

 
 
}