const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    localStorage.setItem("username", data.username)
    localStorage.setItem("password", data.password)

    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
})

function mostrarAlerta(){
    swal({
        title: "Registrado",
      })
    .then((willDelete) => {
        if(willDelete) {
            swal(window.location.href = "http://127.0.0.1:5500/index.html")
        }
    })

}