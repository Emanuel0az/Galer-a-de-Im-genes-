// variable que contiene los inputs y el boton
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const button = document.getElementById('button')
let array = []




// eventoa para que todo lo de abajo funcione haciendo click al boton
button.addEventListener('click', (e) =>{
    if (username.value != "" && password.value != "" && email.value != "") {
        
        e.preventDefault()

        const data = {
        username: username.value,
        password: password.value,
        email: email.value,
    }
    
    array = JSON.parse(localStorage.getItem("array")) || []

    array.push(data)

    localStorage.setItem("array",JSON.stringify(array))
    
    swal({
        title: "Registrado",
      })
    .then((willDelete) => {
        if(willDelete) {
            window.location.href = "Isesion.html"
        }})
        return true;
    }else{
        alert('los datos estan incompletos')
        return false;
    }
    
})
    
    
    // metodo para guardar en el local storage 