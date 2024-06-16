function drawTriangle(numLines){
  let strTriangle = "";
  let SYMBOLE = "*";
  for (let i = 0; i <= numLines; i++) {
    strTriangle += SYMBOLE.repeat(i) + "\n";
  }
  return strTriangle;
}

// Événement click pour le bouton
document.getElementById("validateButton").addEventListener("click", function() {  
  // Dessiner le triangle
  const triangle = drawTriangle(3);
      
  // Afficher le triangle dans l'élément HTML
  document.getElementById("triangleZone").innerText = triangle;
});