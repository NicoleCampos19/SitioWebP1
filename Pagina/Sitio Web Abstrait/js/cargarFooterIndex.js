document.addEventListener('DOMContentLoaded', function(){
    const contenedorFooter= document.getElementById("footerContenedor");
    const menuHTML = generarFooterIndex();

    contenedorFooter.innerHTML = menuHTML;
});