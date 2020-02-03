

var boton = document.getElementById('btn');
var listaTareas = new Array();
var seccionTareas = document.querySelector('#listaTareas');
var ultimoId = 1;

boton.addEventListener('click', e => {
    e.preventDefault();
    var tarea = document.getElementById('tarea').value;
    var prioridad = document.getElementById('prioridad').value;

    if (tarea.length == 0 || prioridad.length == 0 || tarea[0] == " " || prioridad[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden ser vacios";
        document.getElementById('form').reset();

    }
    else 
    {

        guardarDatos(tarea, prioridad);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset();

    }


})

function guardarDatos(pTarea, pPrioridad, pBorrar) {

    // let registro = new Object();
    // registro.tarea = pTarea;
    // registro.prioridad = pPrioridad;

    let registro = {
        id: ultimoId,
        tarea: pTarea,
        prioridad: pPrioridad,
        //borrar: pBorrar
    }

    listaTareas.push(registro);
    pintarTarea(registro);
    ultimoId++;

}



/*
function mostrarFiltrado(pPrioridad)
{
    var filtrado = document.getElementById(area);

    if(this.option == normal){
        
    }else{

    }

}
*/


function pintarTarea(pObjeto) {
    var ul = document.createElement('ul');
    ul.className = 'borrarTodo';
    var li = document.createElement('li');
    li.className = 'mostrarListado';
    var button = document.createElement('button');
    button.className ='btn-borrar';
    button.addEventListener('click',deleteTareas)


 



    var listadoUno = document.createTextNode(`${pObjeto.tarea}  es de grado  ${pObjeto.prioridad} `);
    var textoBoton = document.createTextNode(`borrar`)


    li.appendChild(listadoUno);
    li.appendChild(button);
    button.appendChild(textoBoton);
    ul.appendChild(li);

    seccionTareas.appendChild(ul);

}


function deleteTareas(event){

    //event.li.className = 'disapear';
    event.target.parentNode.parentNode.className += ' disapear';
}
