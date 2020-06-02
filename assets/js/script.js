function resultado() {
  var pregunta1, pregunta2, pregunta3, pregunta4, nota, respuestas;
   
 //1
  if (document.getElementById('p1').checked==true) {
    pregunta1=10
  }
  else {
    pregunta1=0
  }
//2
  if (document.getElementById('p6').checked==true) {
    pregunta2=10
  }
  else {
    pregunta2=0
  }
//3
  if (document.getElementById('p11').checked==true) {
    pregunta3=10}
  else {
    pregunta3=0
  }
//4
  if (document.getElementById('p15').checked==true) {
    pregunta4=10
  }
  else {
    pregunta4=0
  }
  if (document.getElementById('p20').checked==true) {
    pregunta5=10
  }
  else {
    pregunta5=0
  }
 
  
  respuestas= [
    r1=" R1: El hombre llegó a la luna en 1969, o eso dicen",
    r2=" R2: Isaac Newton fue un fisico, y descubrio la gravedad",
    r3=" R3: Messi es el mejor",
    r4=" R4: Minecraft, el de los bloques",
    r5=" R5: Leonardo DaVinci fue el autor de la Ultima Cena."

  ]
  nota = pregunta1+pregunta2+pregunta3+pregunta4+pregunta5;
  
  alert("Puntos: "  + nota)
  alert ("Respuestas correctas: " + respuestas);
}
