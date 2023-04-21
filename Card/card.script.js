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