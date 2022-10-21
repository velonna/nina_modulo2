import React,{useState,useEffect} from 'react'


function ButtonsClass( object){
    const [texto,setTexto] = useState('')
    const [type] = useState(object.typ)
    const [classname] = useState(object.clas)
    const [titulo]=useState(object.titu)
    const [accion]=useState(object.accion)
    const text= object.message;
    useEffect(
        () => {
            console.log('componentDidUpdate - hook equivalente - Solo si cambia el estado texto',texto);
    
        }, [texto]
    );   
  


    useEffect(
        () => {
            return ()=>{
                console.log('este boton tiene la siguiente accion:', accion);
            }
        },
        [accion]);
    function onchange(){
        setTexto(text);
    }
    return(
        <>
            
            <button className={classname} type={type} onClick={onchange}>{titulo}</button>
           
            <div>
            <p> {texto}</p>
                
            </div>
        </>
    )
}

export default ButtonsClass