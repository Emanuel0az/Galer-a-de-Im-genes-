const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()

    usuarios = JSON.parse(localStorage.getItem("array")) || []
    console.log(usuarios);
    valores = usuarios.find(usu => usu.email == email.value && usu.password == password.value)
    console.log(valores)

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


document.getElementById('email').value = "";
document.getElementById('password').value = "";

