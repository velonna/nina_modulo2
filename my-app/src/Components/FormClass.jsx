import React, {Component} from "react"; 
import InputClass from "./InputClass";
import ButtonsClass from "../Components/ButtonsClass";
class FormClass extends Component{
    
    render(){
        (() => {
            //'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }
          
                form.classList.add('was-validated')
              }, false)
            })
          })()
        return(
            <>
                <form className="row">
                    <InputClass name_for="nombre"  title="Nombre" type_input="text" placeholder="nombre" text_valid="Este campo es necesario"/>
                    <InputClass name_for="apellido"  title="Apellido" type_input="text" placeholder="apellido" text_valid="apellido"/>
                    <InputClass name_for="email"  title="Email" type_input="email" placeholder="email" text_valid="Verifique el email"/>
                    <InputClass name_for="telefono"  title="Telefono" type_input="number" placeholder="Telefono" text_valid="ingrese solo numeros"/>
                    <InputClass name_for="password"  title="Password" type_input="password" placeholder="Password" text_valid="Campo necesario, ingrese un valor valido"/>
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <div></div>
                    <ButtonsClass typ='button' clas= "btn btn-primary"  titu="Aceptar" accion= "aceptar" message="Gracias por su compra!"></ButtonsClass>
                    </div>
                    
                </form>
            </>
          
        )
    }
}
export default FormClass

 