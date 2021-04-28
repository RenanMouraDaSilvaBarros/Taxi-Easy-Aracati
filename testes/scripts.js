jQuery(window).load(function () {
    $(".loader").delay(1500).fadeOut("slow"); //retire o delay quando for copiar!
  
});

var users = [
    {
    'usuario': 'luan',
    'senha' :123
  },
  {
    'usuario': 'Marcos',
    'senha' :123
  },
  {
    'usuario': 'Manoel',
    'senha' :123
  },
  {
    'usuario': 'Renan',
    'senha' :123
  },
  {
    'usuario': 'Fred',
    'senha' :123
  },
 {
    'usuario': 'henrique',
    'senha' :123
  },
  ]
  
  function Login(usuario,senha){
      if(VerifyLogin(usuario,senha)){
        toastr.success("Login efetuado"); 
         window.location.href = './taxiListScreen.html';
      }else{
          toastr.error("Informe os valores corretamente!");
         
      }
  }
  
  function VerifyLogin(usuario,senha){
  
      index = users.findIndex(x => x.usuario==usuario && x.senha==senha);
      return index != -1;
  }
  function cadastro(){
    setTimeout(function(){
      window.location.href = './cadastro.html';
  }, 200);
    
  }

  function cadastrarPassageiro(){
    setTimeout(function(){
      window.location.href = './cadastroPassageiro.html';
  }, 200);
  }
  function cadastrarMotorista(){
    setTimeout(function(){
      window.location.href = './cadastroMotorista.html';
  }, 200);
  }
  
  function teste(value){
  $(valor).click(function(){
  console.log(valor)
      //alert($(this).attr('id').checked);
      $(valor).removeClass('active');
      
      var val = parseInt($(this).attr('id'));
      //console.log(val);
      
      $(valor).each(function(){
          /* checar de o valor clicado é menor ou igual do input atual
          *  se sim, adicionar classe active
          */
          
          var $input = parseInt($(this).attr('id'));
          if($input <= val){
            $(this).addClass('teste');
          }else{
          $(this).removeClass('teste');
          }
      });
  })
}
