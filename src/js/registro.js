// variable que contiene los inputs y el boton
const username = document.getElementById('username')
const password = document.getElementById('password')
const mail = document.getElementById('mail')
const button = document.getElementById('button')




// eventoa para que todo lo de abajo funcione haciendo click al boton
button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
        mail: mail.value,
    }

    // metodo para guardar en el local storage 
    localStorage.setItem("username", data.username)
    localStorage.setItem("mail", data.mail)
    localStorage.setItem("password", data.password)




    // datos.push([...data])

    // condicion para guardar en el local storage 
    if (data.username != "" && data.password != "" && data.mail != ""){

        // supuesto array para meter una lista
        let users = []
        users.push({username: username, password: password, mail: mail})

        // esto es una sweet alert que redirecciona a la pagina de inicio
        swal({
            title: "Registrado",
          })
        .then((willDelete) => {
            if(willDelete) {
                window.location.href = "index.html"
            }
        })
        // sirve para dejar los campos en blanco despues de pulsar el boton
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        document.getElementById('mail').value = "";
    }
})
