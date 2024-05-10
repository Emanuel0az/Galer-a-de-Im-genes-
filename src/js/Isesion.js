const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const lojin = document.getElementById('lojin');

// Función para iniciar sesión de usuario
function iniciarSesion(email) {
    localStorage.setItem('email', email);
}

// Función para cerrar sesión de usuario
function cerrarSesion() {
    localStorage.removeItem('email');
}

// Función para verificar si hay una sesión activa
function sesionActiva() {
    return localStorage.getItem('email') !== null;
}

// Evento de clic para iniciar sesión
lojin.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener usuarios del localStorage
    let usuarios = JSON.parse(localStorage.getItem("array")) || [];

    // Encontrar usuario por correo electrónico y contraseña
    let usuario = usuarios.find(usu => usu.email === emailInput.value && usu.password === passwordInput.value);

    if (!usuario) {
        swal("Error", "Correo electrónico o contraseña incorrectos.");
    } else {
        // Iniciar sesión con el correo electrónico
        iniciarSesion(usuario.email);
        swal({
            title: "Bienvenido",
        }).then((willDelete) => {
            if (willDelete) {
                window.location.href = "index.html";
            }
        });
    }
});

// Verificar si hay una sesión activa
console.log('¿Hay una sesión activa?', sesionActiva());
