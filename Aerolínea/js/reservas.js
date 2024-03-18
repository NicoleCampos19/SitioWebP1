const selectOpcion = document.getElementById("selectorLicencia");
const soloVuelo = 199;
const vueloyHotel = 399;
const selector = document.getElementById( 'selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precio = document.getElementById('precio');

selector.addEventListener('change', function(){
if (selector.value === 'estandar'){
  descripcionLicencia.textContent = 'Solo vuelo : Solo cuenta con el ticket de vuelo';
  precio.textContent=` $${soloVuelo}`;
} else if (selector.value === 'premium') {
  descripcionLicencia.textContent = 'Vuelo y hotel: Cuenta con el ticket y estadia en un hotel cercano al aeropuesto por dos dias y una noche';
  precio.textContent = ` $${vueloyHotel}`;
} else {
  descripcionLicencia.textContent = 'Seleccione un paquete';
  precio.textContent = `$`;
}
});

  comprarBtn.addEventListener('click', function(){
  if(selectorLicencia.value == 'ninguno'){

    Swal.fire({
      icon:'error',
      title:'Advertencia',
      text:'Escoja un paquete primero.',
      confirmButtonText:'Entendido'
    })
    }
    else{
      Swal.fire({
        icon:'question',
        title:'Confirmar Compra',
        text:'¿Estás seguro de reservar este paquete?',
        showCancelButton: true,
        confirmButtonText:'Sí, reservar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {

      });
    }
  
  });

  
