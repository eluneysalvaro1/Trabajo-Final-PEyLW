const d = document;
const button = d.getElementById("submit")

d.addEventListener("click" , e => {
    desplegar(e);
    check(e)
} )


d.addEventListener("submit" , e => {
    e.preventDefault()
    const ventana = d.getElementById("window");
    ventana.classList.remove("hidden")
    setTimeout(() => {
        ventana.classList.add("hidden")
    }, 6000);
} )


function desplegar(e){
    let target = e.target;

    const plomeriaCheck = d.getElementById("plomeria_checkbox");
    const electricidadCheck = d.getElementById("electricidad_checkbox");
    const albanilCheck = d.getElementById("albanil_checkbox");
    const nineraCheck = d.getElementById("ninera_checkbox");
    const pinturaCheck = d.getElementById("pintura_checkbox");
    const jardineriaCheck = d.getElementById("jardineria_checkbox");

    if(target == plomeriaCheck){
        let dataPlomeria = d.querySelector(".data_plomeria")    
        dataPlomeria.classList.toggle("hidden")
    }else if(target == electricidadCheck){
        let dataElectricidad = d.querySelector(".data_electricidad")
        dataElectricidad.classList.toggle("hidden")
    }else if(target == albanilCheck){
        let dataAlbanil = d.querySelector(".data_albanil")
        dataAlbanil.classList.toggle("hidden")
    }else if(target == nineraCheck){
        let dataNinera = d.querySelector(".data_ninera")
        dataNinera.classList.toggle("hidden")
    }else if(target == pinturaCheck){
        let dataPintura = d.querySelector(".data_pintura")
        dataPintura.classList.toggle("hidden")
    }else if(target == jardineriaCheck){
        let dataJardineria = d.querySelector(".data_jardinero")
        dataJardineria.classList.toggle("hidden")
    }
}


function cerrar(e){
    let compruebo = e.target;
    let button = d.querySelector("#button_special")
    if (compruebo == button) {
        const ventana = d.getElementById("window");
        ventana.classList.add("hidden")
    }
}


function check(e){
    // e.preventDefault();

    let target = e.target

    const nombreInput = d.getElementById("nombre")
    const apellidoInput = d.getElementById("apellido")
    const numeroTelInput = d.getElementById("numeroTel")
    const emailInput = d.getElementById("email")
    const button = d.getElementById("submit")


    if (target == button) {
        if (nombreInput.value == "") {
            mostrarError(nombreInput)
        }else if(!isNaN(nombreInput.value)){
            mostrarError(nombreInput)
        }else{
            mostrarBien(nombreInput)
        }

        if (apellidoInput.value == "") {
            mostrarError(apellidoInput)
        }else if(!isNaN(apellidoInput.value)){
            mostrarError(apellidoInput)
        }else{
            mostrarBien(apellidoInput)
        }


        if (numeroTelInput.value == "") {
            mostrarError(numeroTelInput)
        }else if(isNaN(numeroTelInput.value)){
            mostrarError(numeroTelInput)
        }else if(numeroTelInput.value.length < 9){
            mostrarError(numeroTelInput)
        }else{
            mostrarBien(numeroTelInput)
        }

        if (emailInput.value == "" ) {
            mostrarError(emailInput)
        }else if(!email(emailInput.value)){
            mostrarError(emailInput)
        }else{
            mostrarBien(emailInput)
        }
    }

   

    function email(email){
        let regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        let res = regExp.test(email)
        return res
    }

    function mostrarError(input){
        input.style.borderColor = "red"
    }

    function mostrarBien(input){
        input.style.borderColor = "green"
    }

}
