function validar_campos_login(){


    var email = formlogin.email;
    var senha = formlogin.senha;


    if(email.value == ""){

       alert("E-mail não fornecido");

       email.focus();
       
    }
    else if(senha.value == "") {

        alert("Senha não fornecido");

        senha.focus();
    }
}