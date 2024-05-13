const imageUploader = document.getElementById('imageUploader')
const subirButton = document.getElementById('subir')
const logoutButton = document.getElementById('logout')
const galeria = document.getElementById('galeria')
const titlulos = document.getElementById('titulos')
const tituloImagen = document.getElementById('tituloImagen')

// evento para subir la imagen en el index
subirButton.addEventListener('click', function (){
  const archivo = imageUploader.files[0];

  let usuarioLoggeado = localStorage.getItem("email");

  if(archivo){
    // leer archivo como base 64
    const reader = new FileReader();
    reader.onload = function(e) {

    // crear elemento de la imagen
    const imagen = document.createElement('img');
    imagen.src = e.target.result;

    data = {
      titulo: tituloImagen.value,
      img: e.target.result, // esto es la imagen como base 64
      email: usuarioLoggeado
    }

    localStorage.setItem("imagen", JSON.stringify(data))

    imagen.classList.add('imagen')

    // agregar imagen a la galeria
    galeria.appendChild(imagen);

    // evento para hacer zoom a la imagen
    imagen.addEventListener('click', function(){
      hacerZoom(imagen.src)
    })
  }
  reader.readAsDataURL(archivo);
  }
})

// evento para cerrar sesion 
logoutButton.addEventListener('click', function(){
  
  // limpiargaleria
 localStorage.removeItem('email')
})

// funcion para hacer zoom
function hacerZoom(src) {
  const zoomImagen = document.createElement('img');
  zoomImagen.src = src;
  zoomImagen.classList.add('zoomed')

  // crear overlay para el fondo
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')

  // agregar la imagen y el overlay al body del html
  document.body.appendChild(zoomImagen)
  document.body.appendChild(overlay)

// evento para cerrar el zoom
  zoomImagen.addEventListener('click', function(){
    document.body.removeChild(zoomImagen)
    document.body.removeChild(overlay)

  })
}