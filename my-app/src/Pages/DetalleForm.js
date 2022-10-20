import CardClass from "../Components/CardClass"

function DetalleForm(){
    
    return(

<div className="container my-5">
  

    <div className="card red py-2" id="intro">

     
      <div className="card-body text-white">

        <h5 className="mb-4 font-weight-bold">
          This example is for an older version of Bootstrap (v.4). A newer version is available for Bootstrap 5.
        </h5>
      

      </div>
    
    </div>


  <hr className="my-5"/>

  <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

    <div className="controls-top">
      <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
      <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
    </div>
    
    <ol className="carousel-indicators">
      <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
      <li data-target="#multi-item-example" data-slide-to="1"></li>
      <li data-target="#multi-item-example" data-slide-to="2"></li>
    </ol>
  
    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active">

        <div className="row">
             <CardClass title="Card title" desc="Some quick pablito clavo un clavito p the bulk of the
                  card's content." butonName="Button" altName="Nambrede foto" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"></CardClass>

            <CardClass title="Card title" desc="Some quick llora ipsun con dolor mucho dolor the
                  card's content." butonName="Button2" altName="Nambrede foto2" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"></CardClass>
            <CardClass title="Card title" desc="Some quick lorena la del dialogo sin sentido the
                  card's content." butonName="Button3" altName="Card image cap" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"></CardClass>

    
            </div>
          </div>
      <div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>

      </div>
     
      <div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>

      </div>
  
    </div>
 
  </div>
  
</div>
 )
} 
export default DetalleForm