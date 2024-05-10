button.addEventListener('click')
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
console.log(button)
  