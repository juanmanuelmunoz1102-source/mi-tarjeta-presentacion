const colores = ["#2e7d4f", "#e65100", "#6a1b9a", "#0277bd", "#c62828", "#00838f"];
let indiceColor = 0;
 
// Función 1: cambia el color del h1 con el nombre
function cambiarColorNombre() {
  indiceColor = (indiceColor + 1) % colores.length;
  document.getElementById("nombre").style.color = colores[indiceColor];
}
 
// Función 2: muestra u oculta el bloque de contacto
function toggleContacto() {
  const contacto = document.getElementById("contacto");
  contacto.classList.toggle("oculto");
 
  // Cambia el texto del botón según el estado
  const boton = event.target;
  if (contacto.classList.contains("oculto")) {
    boton.textContent = "📱 Ver mis redes sociales";
  } else {
    boton.textContent = "❌ Ocultar redes sociales";
  }
}
 