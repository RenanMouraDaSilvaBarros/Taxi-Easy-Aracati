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
  ]
  
  function Login(usuario,senha){
      if(VerifyLogin(usuario,senha)){
        toastr.success("Login efetuado"); 
        // window.location.href = './index.html';
      }else{
          toastr.error("Informe os valores corretamente!");
         
      }
  }
  
  
  function VerifyLogin(usuario,senha){
  
      index = users.findIndex(x => x.usuario==usuario && x.senha==senha);
      return index != -1;
  }
  