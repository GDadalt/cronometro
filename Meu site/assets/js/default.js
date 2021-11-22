$(function(){
    
    var contador = 0;
    var cronometro = null;

    function incrementaContador() {
        contador++;
        $("#contador").text(contador);
    }

    $("#btn-iniciar").on('click', function(){
        if(cronometro === null) {
            cronometro = setInterval(incrementaContador, 1000);
            $("#btn-iniciar").text("PAUSAR");
        } else {
            clearInterval(cronometro);
            cronometro = null;
            $("#btn-iniciar").text("RETOMAR");
        }
        
        //incrementaContador();
    });

    $("#btn-zerar").on('click', function(){
        clearInterval(cronometro);
        cronometro = null;
        contador = 0;
        $("#contador").text(contador);
        $("#btn-iniciar").text("INICIAR");
    });
    
});
