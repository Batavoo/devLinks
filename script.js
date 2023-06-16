function toggleMode() {
  const html = document.documentElement
  /*   
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 
*/
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute("alt", "Imagem fofa que eu achei na internet")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Gustavo Santos sorrindo, usando óculos e camisa florida"
    )
  }
  // Trocar a imagem dependendo se tá no dark mode ou light mode
}
