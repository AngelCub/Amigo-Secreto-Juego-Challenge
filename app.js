let listaAmigos = [];

let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar si ya existe el nombre (sin importar mayúsculas/minúsculas)
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este nombre ya fue agregado.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);

    // Crear un nuevo <li> y añadirlo a la lista
    let li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);

    // Limpiar el input
    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sorteo];
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
