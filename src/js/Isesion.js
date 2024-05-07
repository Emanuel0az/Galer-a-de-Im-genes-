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

    if (data.username != "" && data.password != "") {
        swal({
            title: "Registrado",
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

