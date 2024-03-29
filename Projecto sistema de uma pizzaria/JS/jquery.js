$(document).ready(function(){
   
    var slids = $(".div-slider [type=radio]"); // busca os radios na div
    var slids_len = slids.length; // conta o número de radios
    var intervalo = 2; // intervalo em segundos
    console.log(slids);
    function rodar(){
       var slids_ativo = $(".div-slider [type=radio]:checked")
       .attr("id")
       .match(/\d+/)[0]; // pega o valor numérico do id do radio checado
 
       if(slids_ativo == slids_len) slids_ativo = 0; // se estiver no último slide, volta pro primeiro
 
       slids.eq(slids_ativo).prop("checked", true); // checa o radio da vez
    }
    
    var tempo = setInterval(rodar, intervalo*1000); // inicia o temporizador
    
    $(".div-slider").hover(
       function(){ // função quando entra o mouse
          clearInterval(tempo); // cancela o temporizador
       },
       function(){ // função quando retira o mouse
          tempo = setInterval(rodar, intervalo*1000); // reinicia o temporizador
       }
    );
    
 });
 