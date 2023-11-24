//cargue el documento ready
$(document).ready(function(){
    //alert("Ajax");
    getRazas();//llama la función al activarse o leerse el documento
});

//traer todas las razas

function getRazas(){
    //console.log("Función");//prueba para validar que funcione
    // $.ajax({
    $.ajax({
        method: "POST",
        url: "api/datosRazas.php",
        dataType: "json"
    }).done(function(respuesta){
        console.log(respuesta);
    }).fail(function(error){
        console.log(error);
    });
//         //Aqui van los parametros para la solicitud
//         method: "POST",//hay dos metodos el POST que envia los datos de forma oculta y get que los envia visible en url del navegador
//         url: "api/datosRazas.php",//Ruta del servidor que será consumida por la API
//         dataType: "json"//Formato para recibir los datos, en este caso JSON
//         //data://Enviar parametros
    // }).done(function(respuesta){
//         console.log(respuesta);
//         $.each(respuesta, function(index, val){
//             //console.log(val.raza);
//             $("#razas").append("<option value='"+val.id+"'>"+val.raza+"</option>");
//         });
//     }).fail(function(error){
//         console.log(error);
//     });
};