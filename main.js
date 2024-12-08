document.getElementById('generate-btn').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_-+=<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password-output').innerText = password;
});

// Copiar al portapapeles
document.getElementById('copy-btn').addEventListener('click', function() {
    const password = document.getElementById('password-output').innerText;

    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Contraseña copiada al portapapeles');
            })
            .catch(err => {
                alert('No se pudo copiar la contraseña');
                console.error(err);
            });
    } else {
        alert('Primero genera una contraseña para copiar');
    }
});

// Limpiar contraseña generada
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('password-output').innerText = '';
});
