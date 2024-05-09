const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        email: email.value,
        password: password.value
    }

    localStorage.getItem("email", data.email)
    localStorage.getItem("password", data.password)

    

    if (data.email == localStorage.email && data.password == localStorage.password) {
        swal({
            title: "Bienvenido",
          })
        .then((willDelete) => {
            if(willDelete) {
                window.location.href = "index.html"
            }else{
            
            }

        })
    
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }


})

