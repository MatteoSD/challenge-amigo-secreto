// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    //Extraemos el texto sin los espacios del inicio y fin.
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre que sea válido.");
    } else {
        //Si el nombre es válido lo agregamos a la lista
        listaAmigos.push(nombre);
        let listaAlmacen = document.getElementById("listaAmigos");
        let listaNombres = document.createElement("li");
        listaNombres.textContent = nombre;
        listaAlmacen.append(listaNombres);
        //limpiamos el campo
        input.value = "";
    }
}

function sortearAmigo() {
    //verificar si existen nombres en la lista
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear, ingrese algunos.");
    } else {
        //seleccionar al amigo secreto
        let numeroRandom = Math.floor(Math.random() * listaAmigos.length);
        let amigoSecreto = listaAmigos[numeroRandom];
        
        //se vacía el contenido de la lista para que solo se muestre el mensaje del sorteo
        let listaAlmacen = document.getElementById("listaAmigos");
        listaAlmacen.innerHTML = "";
        
        // Mostrar el resultado del sorteo
        let resultadoSorteo = document.getElementById("resultado");
        resultadoSorteo.innerHTML = "";
        
        //reemplazamos el elemento con el nuevo mensaje del sorteo y se agrega a la lista del resultado
        let resultadoFinal = document.createElement("li");
        resultadoFinal.textContent = "El amigo secreto es: " + amigoSecreto;
        resultadoSorteo.append(resultadoFinal);
    }
}