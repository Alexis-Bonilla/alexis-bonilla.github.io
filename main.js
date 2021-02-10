
const modalAdmin = document.getElementById('modal_container_admin');
const modalGestionProyectos = document.getElementById("modal_container_gestionProyectos");
const modalContabilidad = document.getElementById("modal_container_contabilidad");
const modalgestionCambio = document.getElementById("modal_container_gestionCambio");
const modalLiderazgo = document.getElementById("modal_container_liderazgo");
const modalCreativo = document.getElementById("modal_container_creativo");
const modalOrganizado = document.getElementById("modal_container_organizado");
const modalSerio = document.getElementById("modal_container_serio");


const botonAdmin = document.getElementById('boton_admin');
const botonGestionProyectos = document.getElementById("boton_gestion_proyectos");
const botonContabilidad = document.getElementById("boton_contabilidad");
const botonGestionCambio = document.getElementById("boton_gestion_cambio");
const botonLiderazgo = document.getElementById("boton_liderazgo");
const botonCreativo = document.getElementById("boton_creativo");
const botonOrganizado = document.getElementById("boton_organizado");
const botonSerio = document.getElementById("boton_serio");






botonAdmin.addEventListener('click',()=>{


mostrarOcultar(modalAdmin);



});
botonGestionProyectos.addEventListener('click',()=>{



mostrarOcultar(modalGestionProyectos);


});
botonContabilidad.addEventListener('click',()=>{


    mostrarOcultar(modalContabilidad);




});
botonGestionCambio.addEventListener('click',()=>{


    mostrarOcultar(modalgestionCambio)




});
botonLiderazgo.addEventListener('click',()=>{

mostrarOcultar(modalLiderazgo);
    




});
botonCreativo.addEventListener('click',()=>{

mostrarOcultar(modalCreativo);




});
botonOrganizado.addEventListener('click',()=>{

mostrarOcultar(modalOrganizado);
    




});
botonSerio.addEventListener('click',()=>{


  mostrarOcultar(modalSerio);  




});



    function mostrarOcultar( div) {
       
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }

