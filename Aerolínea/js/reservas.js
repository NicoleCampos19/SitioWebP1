const selectOpcion = document.getElementById("selectorLicencia");
const PreciolicenciaEstandar = 199;
const PreciolicenciaPremium = 399;
const selectorLicencia = document.getElementById( 'selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

selectorLicencia.addEventListener('change', function(){
if (selectorLicencia.value === 'estandar'){
  descripcionLicencia.textContent = 'Licencia Estándar : Acceso a funciones básicas del programa y soporte técnico simple.';
  precioLicencia.textContent=` $${PreciolicenciaEstandar}`;
} else if (selectorLicencia.value === 'premium') {
  descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las características del programa y soporte técnico prioritario.';
  precioLicencia.textContent = ` $${PreciolicenciaPremium}`;
} else {
  descripcionLicencia.textContent = 'Seleccione una Licencia';
  precioLicencia.textContent = `$`;
}
});

  comprarBtn.addEventListener('click', function(){
  if(selectorLicencia.value == 'ninguno'){

    Swal.fire({
      icon:'error',
      title:'Advertencia',
      text:'Escoja una licencia primero.',
      confirmButtonText:'Entendido'
    })
    }
    else{
      Swal.fire({
        icon:'question',
        title:'Confirmar Compra',
        text:'¿Estás seguro de comprar la licencia?',
        showCancelButton: true,
        confirmButtonText:'Sí, Comprar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {

      });
    }
  
  });
