function validarFormulario(){
            var texto;
            var usuario= document.forms["miform"]["email"].value;
            var contra= document.forms["miform"]["password"].value;
            if(usuario == null || usuario == "" || contra == null || contra == ""){
                texto= "Ingresar tu email y/o contraseña";
                document.getElementById("info").innerHTML= texto;
                return false;
            }else{
                document.location.href="https://proyectount01.blogspot.com";
                return false;
            }
            
        }