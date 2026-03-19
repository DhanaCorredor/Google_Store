// Seleccionamos el formulario y el div del mensaje
const formulario = document.getElementById('userForm');
const mensajeDiv = document.getElementById('mensaje');

// Escuchamos el evento "submit" (cuando se envía el formulario)
formulario.addEventListener('submit', (event) => {
    // Evitamos que la página se refresque
    event.preventDefault();

    // Capturamos los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    // Mostramos los datos en la consola (F12 en el navegador)
    console.log("Datos recibidos:", { nombre, email, edad });

    // Mostramos un mensaje de éxito en la página
    mensajeDiv.innerText = `¡Gracias ${nombre}! Tus datos han sido registrados.`;
    
    // Opcional: Limpiar el formulario
    formulario.reset();
});