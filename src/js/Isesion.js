const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

// es un evento que al darle click busca valores en el LS y los compara con los que estan en los inputs para darle acceso 
button.addEventListener('click', (e) => {
            e.preventDefault()

    // obtiene los valores del local storage mediante el array
    usuarios = JSON.parse(localStorage.getItem("array")) || []
    console.log(usuarios);

    // con el metodo find le pido que busque dichos valores el el LS y los compare 
    valores = usuarios.find(usu => usu.email == email.value && usu.password == password.value)
    console.log(valores)

    // una condicion que siga que si son iguales los valores me de una alerta de bienvenido y si no otra alerta de error
    if (!valores) {
        swal("Error", "Contraseña ");
    } else {
        swal({
            title: "Bienvenido",
        })
            .then((willDelete) => {
                if (willDelete) {
                    window.location.href = "index.html"
                    localStorage.setItem("array", JSON.stringify(usuarios))
                }
            })
    }
})

// hace que los espacios de los inputs queden en blanco
document.getElementById('email').value = "";
document.getElementById('password').value = "";

