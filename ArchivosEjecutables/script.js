// CREAREMOS UNA VARIABLE PARA CLICKEAR UN BOTÓN, OTRA PARA MOSTRAR LA CANTIDAD DE CLICKS Y POR ÚLTIMO, UN CONTADOR...

let btn1 = document.querySelector('#clickbtn');
let showClicks = document.querySelector('#showdata');
let counter = 0;

// DESPUÉS, AGREGAREMOS UNA FUNCIÓN PARA JAVASCRIPT...

function printClick()
{
    counter++;
    console.log("YOU CLICKED THE BUTTON!!!");
    showClicks.innerHTML = "Number of clicks: " + counter;
}

// LUEGO, AGREGAREMOS UN EVENTO CON LA VARIABLE YA DECLARADA...

btn1.addEventListener('click', printClick);