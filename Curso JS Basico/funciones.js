/*Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1) Declarativas
2) De expresión
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .*/

//Declarativas. FORMULA= function NOMBREFUNCION () {}

function miFuncion () {
    return 3;
}

miFuncion();



//Expresión. ()=PARAMETROS

var miFuncion = function(a,b){
    
    
    
    return a + b;

}

miFuncion();

/*EJEMPLO NAVEGADOR*/

function saludarEstudiante(estudiante) {
    console.log(estudiante)
}

saludarEstudiante("José");

function saludarEstudiante(estudiante) {
    console.log (`Hola ${estudiante}`);
}

saludarEstudiante("José;")