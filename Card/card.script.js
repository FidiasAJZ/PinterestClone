const cards = document.querySelectorAll('.gallery-item');

cards.forEach(card => {

  //Crear boton de mas opciones
  const img = card.querySelector('img');

  //Creando el boton de mas opciones
  const button = document.createElement('button');
  button.classList.add('btnOpciones');
  button.innerHTML = '<i class="fa fa-ellipsis-h"></i>';

  //Creando boton de compartir
  const btnCompartir = document.createElement('button');
  btnCompartir.classList.add('btnCompartir');
  btnCompartir.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i>';

  //Creando boton de guardar
  const btnGuardar = document.createElement('button');
  btnGuardar.classList.add('btnGuardar');
  btnGuardar.textContent = 'Guardar';

  //Agregando los botones a pantalla
  card.appendChild(button);
  card.appendChild(btnCompartir);
  card.appendChild(btnGuardar);

  //Este evento nos permite crear algo en pantalla cuando el mouse esta encima de un elemento.
  card.addEventListener('mouseover', () => {
    button.style.display = 'block';
    btnCompartir.style.display = 'block';
    btnGuardar.style.display = 'block';
  });

  //Este evento hace lo contrario de lo de arriba, pero en este caso estamos eliminado lo que fue creado.
  card.addEventListener('mouseout', () => {
    button.style.display = 'none';
    btnCompartir.style.display = 'none';
    btnGuardar.style.display = 'none';
  });
});




//Filtrar las imagenes con el searchBar
class tarjetas {
  constructor(titulo, imagen, descripcion) {
    this.titulo = titulo;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}

var galleryTarjetas = [
  new tarjetas('CyberPunk', 'Direccion imagen1', 'imagen'),
  new tarjetas('Zelda', 'Direccion imagen2', 'imagen'),
  new tarjetas('Web Design', 'Direccion imagen3', 'imagen'),
  new tarjetas('CyberPunk', 'Direccion imagen4', 'imagen'),
  new tarjetas('CyberPunk', 'Direccion imagen5', 'imagen'),
  new tarjetas('Web Design', 'Direccion imagen6', 'imagen'),
  new tarjetas('Pokemon', 'Direccion imagen7', 'imagen'),
  new tarjetas('Diseños de IA', 'Direccion imagen8', 'imagen'),
  new tarjetas('Animal Crossing', 'Direccion imagen9', 'imagen'),
  new tarjetas('Aesthetic Design', 'Direccion imagen10', 'imagen')
];

//Funcion donde tarjetas es el array con los objetos y el buscador es el titulo para hacer el filtro.
function filtrarTarjetasPorTitulo(tarjetas, buscador) {
  var tarjetasFiltradas = [];
  var titulos = [];

  for (var i = 0; i < tarjetas.length; i++) {
    var tarjeta = tarjetas[i];

    if (tarjeta.titulo == buscador) {
      // Si el título ya existe en el arreglo de títulos, agregar la tarjeta al arreglo de tarjetas filtradas
      tarjetasFiltradas.push(tarjeta);
    } else {
      // Si el título no existe en el arreglo de títulos, agregarlo y continuar con la siguiente iteración del bucle
      titulos.push(tarjeta.titulo);
    }
  }
  return tarjetasFiltradas;
}

var tarjetasFiltradas = filtrarTarjetasPorTitulo(galleryTarjetas, 'Aesthetic Design');

for (var i = 0; i < tarjetasFiltradas.length; i++) {
  var tarjeta = tarjetasFiltradas[i];

  // Mostrar la tarjeta en la consola
  console.log(tarjeta.titulo + ' - ' + tarjeta.imagen + ' - ' + tarjeta.descripcion);
}