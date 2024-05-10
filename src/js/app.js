/*logout.addEventListener('click')
function guardarImagen(){ {
    let archivo = document.getElementById('imageUploader').files[0];
    let reader = new FileReader();
    
    reader.onload = function (e) {
      localStorage.setItem('imagen', e.target.result);
    };
    
    if (archivo) {
      reader.readAsDataURL(archivo);
    }
  }
}
console.log(button)*/


const imageUploader = document.getElementById('imageUploader')
const subirButton = document.getElementById('subir')
const logoutButton = document.getElementById('logout')
const galeria = document.getElementById('galeria')
const titlulos = document.getElementById('titulos')
const tituloImagen = document.getElementById('tituloImagen')

// evento del clic para subir la imagen
subirButton.addEventListener('click', function (){
  const archivo = imageUploader.files[0];

  if(archivo){
    // leer archivo como url
    const reader = new FileReader();
    reader.onload = function(e) {

    // crear elemento de imagen
    const imagen = document.createElement('img');
    imagen.src = e.target.result;
    imagen.classList.add('imagen')

    // agregar imagen a la galeria
    galeria.appendChild(imagen);

    // evento de clic para hacer zoom a la imagen
    imagen.addEventListener('click', function(){
      hacerZoom(imagen.src)
    })
  }
  reader.readAsDataURL(archivo);
  }
})

// evento de clic para cerrar sesion 
logoutButton.addEventListener('click', function(){
  
  // limpiargaleria
  galeria.innerHTML = ""
})

// funcion para hacer zoom
function hacerZoom(src) {
  const zoomImagen = document.createElement('img');
  zoomImagen.src = src;
  zoomImagen.classList.add('zoomed')

  const overlay = document.createElement('div')
  overlay.classList.add('overlay')

  document.body.appendChild(zoomImagen)
  document.body.appendChild(overlay)

  zoomImagen.addEventListener('click', function(){
    document.body.removeChild(zoomImagen)
    document.body.removeChild(overlay)

  })
}