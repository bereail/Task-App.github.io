const formularioUI = document.querySelector('#formulario');
const  listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];

/*CREANDO ITEMS*/

const crearItem = (actividad) => {
    /*DEFINO EL OBJETO*/
    let item = {
    actividad: actividad,
    estado: false,
}
    arrayActividades.push(item);

    return item;

}

const GuardarDB = () => {
    /*los arrays para localStorage deben guardarse en formato json*/
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

}



/*Agregar actividad* EVENT LISTENES*/
formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
    
        crearItem(actividadUI);
        GuardarDB();
        formularioUI.reset();

});


/* Enviar valores
let correr = crearItem('trotar');
let nada = crearItem('Nadar');

console.log(correr);
console.log(arrayActividades);

*/