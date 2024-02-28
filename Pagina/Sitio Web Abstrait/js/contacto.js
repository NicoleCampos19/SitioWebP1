const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_jqnvs25';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon:'success',
        title:'Mensaje enviado',
        text:'Muchas gracias por sus comentarios.',
        confirmButtonText:'Entendido'
      });
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });

    var item= document.getElementById("form");
    item.reset()
});