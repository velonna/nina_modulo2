import CardClass from "../Components/CardClass"

function DetalleForm(){
    
    return(

<div className="container my-5">
  

    <div className="card red py-2" id="intro">

     
      <div className="card-body">

              Detalles

      </div>
    
    </div>


  <hr className="my-5"/>

  <div id="multi-item-example" className="carousel slide carousel-dark carousel-multi-item" data-ride="carousel">
   
  
    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active">

        <div className="row">
             <CardClass title="Card title" desc="Some quick pablito clavo un clavito p the bulk of the
                  card's content." butonName="Comprar" altName="Nambrede foto" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"></CardClass>

            <CardClass title="Card title" desc="Some quick llora ipsun con dolor mucho dolor the
                  card's content." butonName="Comprar" altName="Nambrede foto2" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"></CardClass>
            <CardClass title="Card title" desc="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. " butonName="Comprar" altName="Card image cap" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"></CardClass>

    
        </div>
      </div>  
     
        
    </div>
 
  </div>
  
</div>
 )
} 
export default DetalleForm