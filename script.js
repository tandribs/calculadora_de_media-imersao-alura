function calculaMedia(){
  
    var notaPrimeiroBimestre = document.getElementById("nota1").value;
    var notaSegundoBimestre = document.getElementById("nota2").value;
    var notaTerceiroBimestre = document.getElementById("nota3").value;
    var notaQuartoBimestre = document.getElementById("nota4").value;
    
    notaPrimeiroBimestre = parseFloat(notaPrimeiroBimestre);
    notaSegundoBimestre = parseFloat(notaSegundoBimestre);
    notaTerceiroBimestre = parseFloat(notaTerceiroBimestre);
    notaQuartoBimestre = parseFloat(notaQuartoBimestre);
    
    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre +   notaTerceiroBimestre + notaQuartoBimestre) / 4
   
    var notaFixada  = notaFinal.toFixed(1) 
    
    if(notaFixada >= 6){
      var aprovado = document.getElementById("notaResultado");
      var aprovacao = "Nota final: " + notaFixada + " - Parabéns pela dedicação e continue estudando!";
        aprovado.innerHTML = aprovacao;
    }else{
        var recuperacao = document.getElementById("notaResultado");
        var recuperar = "Nota Final: " + notaFixada + " - Infelizmente você ficou em recuperação. Mas não desista e continue se esforçando!";
        recuperacao.innerHTML = recuperar;
    }
  }