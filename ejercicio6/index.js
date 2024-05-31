function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim(), 10);
    const altura = parseInt(document.getElementById('altura').value.trim(), 10);
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje');
    let esValido = true;
    let mensajes = [];

    if (nombre === '' || nombre.length > 50) {
        esValido = false;
        mensajes.push('El nombre no puede estar vacío y debe tener un máximo de 50 caracteres.');
    }

    if (apellido === '' || apellido.length > 50) {
        esValido = false;
        mensajes.push('El apellido no puede estar vacío y debe tener un máximo de 50 caracteres.');
    }

    if (isNaN(edad) || edad < 18) {
        esValido = false;
        mensajes.push('La edad no puede ser negativa y debe ser mayor o igual a 18 años.');
    }

    if (isNaN(altura) || altura < 0 || altura > 230) {
        esValido = false;
        mensajes.push('La altura no puede ser negativa y debe ser menor o igual a 230 cm.');
    }

    if (email === '' || !email.includes('@')) {
        esValido = false;
        mensajes.push('El correo electrónico no puede estar vacío y debe incluir "@"');
    }

    if (esValido) {
        mensaje.textContent = 'El formulario ha sido enviado correctamente.';
        mensaje.className = 'correcto';
    } else {
        mensaje.textContent = mensajes.join(' ');
        mensaje.className = 'incorrecto';
    }
}
