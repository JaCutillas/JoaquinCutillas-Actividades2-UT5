
function  gestionarFicheroTXT(txt)
{
  let capaVacia = document.querySelector("main");
  let lineas = txt.split("-");
  let emisor = lineas[2];
  let alineado = "derecho";
  
  for (let i = 0; i < lineas.length; i+=3){
    if (lineas[i+2] == emisor){
      alineado = "derecho";
    }
    else{
      alineado = "izquierdo";
    }
    capaVacia.innerHTML += "<div class='"+ alineado + "'>" + lineas[i+3] + "</div>";
  }
}

loadDocA("test.txt","txt");

