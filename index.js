const usuario = document.getElementById("user");
const password = document.getElementById("pass");
const boton = document.getElementById("boton");
const registro = document.getElementById("alta");
const user = usuario.value;
const pass = password.value;
let arrayDatos = []

let contador = 0;



boton.addEventListener("click", (e) =>{
    e.preventDefault();
    
    console.log(user);
    console.log(pass);
    alta();

    // if (user == "user" && pass == "web_dev") {
    //     alert("You have successfully logged in.");
    //     location.reload();
    // } else{
    //     alert("ERROR")
    // }


});
const alta = ()=> {
    if (usuario.value == "" || password.value == ""){
        swal({
            text: "Ingrese todos los datos",
            icon: "error"
        });

    }else {
        arrayDatos.push(usuario.value,password.value);
        console.log(arrayDatos);
        let arrayDatosJson = JSON.stringify(arrayDatos);
        localStorage.setItem(contador ,arrayDatosJson);
        console.log(localStorage)
        contador++;
        setTimeout(() => {

            registro.innerHTML = `
              <h2>Ingresando...</h2>
            `
        }, )
        setTimeout(() => {
            registro.innerHTML = ""
            cambioCuotas();
        }, 2000)

        
    }
}
function cambioCuotas (){
window.location="cuotas.html"
};

