//Service worker

if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceworker del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err))
}else{
    console.log('NO Puedes usar los serviceWorker del navegador');
}


//scroll suavizado
$(document).ready(function(){
    //console.log("Hola Mundo");
    $("#menu a").click(function(e){
        //Cancela el evento si este es cancelable
        e.preventDefault();
        //animate es un  método de instancia crea una nueva animación
        $("html, body").animate({
            //Establece el número de píxeles que el contenido de un elemento
            //ha sido desplazado
            scrollTop: $($(this).attr('href')).offset().top
        });
    return false; 
    })
});