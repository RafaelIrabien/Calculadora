const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//Recorremos todos los botones
buttons.forEach((item)=>{
    //Los botones tienen el evento de onclick
    //Reconocemos a que botón le hemos dado click
    item.onclick=()=>{
        //Botón de limpiar
        if (item.id=="clear") {
            /*Eliminamos todo texto en la pantalla de visualización*/
            display.innerText="";
        }
        //Botón de espacio
        else if (item.id=="backspace") {
            //Primero cuenta la cantidad de caracteres que escribimos en la pantalla
            //Convertimos el texto interno a cadena de caracteres
            let string = display.innerText.toString();

            /*substr() devuelve los caracteres de una cadena que comienza en una
            localización específicada y de acuerdo al número de caracteres que
            se indicarán. En resumen, estrae el ultimo caracter */
            display.innerText = string.substr(0, string.length-1)

        }
        //Si la pantalla tiene numeros escritos y se selecciona el botón "="
        else if (display.innerText != "" && item.id=="equal") {
            //Hacer las operaciones que se estén ejecutando 
            /*eval() evalúa el código JavaScript representado como una cadena 
            y devuelve su valor de finalización. La fuente se analiza como un script.
            Ejemplo: "2+2", "3*3", "45/9", etc.*/
            display.innerText = eval(display.innerText);
        }
        //En caso que la pantalla esté vacía y oprimamos "="
        else if (display.innerText == "" && item.id=="equal") {
            //Mostrar el texto
            display.innerText = "Null";
            //setTimeout: Establecer tiempo de espera, 2000ms = 2s
            //Borra el texto anterior en un determinado tiempo
            setTimeout(() => (display.innerText=""), 2000);
        }

        else {
            //Adjuntar a la pantalla lo que oprimamos
            display.innerText+= item.id;
            
        }
    }
});




/* Activar el tema oscuro y claro */
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const body = document.querySelector("body");
let isDark = true;

themeToggleBtn.onclick=()=>{
    /*Con classList decimos que afecte a todas las clases que esten 
    dentro del div calculator*/
    //Que afecte al switch o a la clase dark
    
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark!=isDark;
    if (isDark==true) {
        body.classList.toggle("dark1");
    }
};