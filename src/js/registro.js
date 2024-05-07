const username = document.getElementById('username')
const password = document.getElementById('password')
const mail = document.getElementById('mail')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
        mail: mail.value,
    }

    localStorage.setItem("username", data.username)
    localStorage.setItem("mail", data.mail)
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
        document.getElementById('mail').value = "";
    }
})