const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    localStorage.getItem("username", data.username)
    localStorage.getItem("password", data.password)

    

    if (data.username == localStorage.username && data.password == localStorage.password) {
        swal({
            title: "Bienvenido",
          })
        .then((willDelete) => {
            if(willDelete) {
                window.location.href = "index.html"
            }

        })
    
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }


})

