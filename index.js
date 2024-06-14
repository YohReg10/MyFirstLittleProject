function drawTriangle(numLines){
  let strTriangle = "";
  let SYMBOLE = "*";
  for (let i=0; i <= numLines; i++)
  {
    strTriangle += SYMBOLE.repeat(i) + "\n";
  }
  return strTriangle;
}
