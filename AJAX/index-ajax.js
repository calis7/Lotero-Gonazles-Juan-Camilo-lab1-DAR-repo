
/***************************************************************************************** */

window.onload = function () {
  const recursoInput = document.getElementById('recurso');
  const enviarButton = document.getElementById('enviar');
  const contenidoDiv = document.getElementById('contenidos');
  const estadosDiv = document.getElementById('estados');
  const cabecerasDiv = document.getElementById('cabeceras');
  const codigoDiv = document.getElementById('codigo');

  // Al cargar la página, mostrar la URL por defecto
  recursoInput.value = window.location.href;

  enviarButton.addEventListener('click', function () {
    // Resetear los divs
    contenidoDiv.innerText = '';
    estadosDiv.innerText = '';
    cabecerasDiv.innerText = '';
    codigoDiv.innerText = '';

    // Obtener la URL ingresada por el usuario
    const url = recursoInput.value;

    // Mostrar estado de la petición
    estadosDiv.innerText = 'Estado: Cargando...';

    // Realizar la petición AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true); // El true permite tener una petición asíncrona
    console.log(xhr.status)
    
    // Mostrar los estados de la petición
    xhr.onreadystatechange = () => {
      
      console.log(xhr.status)
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          
          estadosDiv.innerText = 'Estado: Completada ' + "con código " + xhr.statusText;
          cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
          codigoDiv.innerText = 'Código de estado: ' + xhr.readyState;
          if (xhr.getResponseHeader('Content-Type').includes('application/json')) {
            // Si la respuesta es de tipo JSON, mostrar por consola el objeto JSON como cadena
            const jsonResponse = JSON.parse(xhr.responseText);
            console.log(JSON.stringify(jsonResponse, null, 2));
            contenidoDiv.innerText = 'Contenidos del archivo:\nVer la consola para el objeto JSON.';
          } else
            // Si no es JSON, mostrar el contenido de texto normal
            contenidoDiv.innerText = 'Contenidos del archivo:\n' + xhr.responseText;
        } else {
          estadosDiv.innerText = 'Estado: Error';
          cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
          codigoDiv.innerText = 'Código de estado: ' + xhr.readyState;
          contenidoDiv.innerText = 'Error al obtener el recurso.';
        }
      }
    };
    console.log(xhr.status)
    // Enviar la solicitud
    xhr.send();
  });
};



