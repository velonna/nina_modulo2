import React from 'react';
import { Button,TextField } from '@mui/material';
import {useForm,Controller} from "react-hook-form";
import InputClass from '../Components/InputClass';

import firebase from '../Config/firebase';



function Home(){
    //const {register, handleSubmit, formState:{errors}}=useForm();
    const { handleSubmit, reset, control } = useForm();
    const onSubmit = async data =>{
        try{
            const responseUser=  await firebase.auth.createUserWithEmailAndPassword(data.email, data.pass)
            console.log(responseUser);
            /*if(responseUser.user.uid){
                 await firebase.firestore.collection("login-56504")
                .add({
                    name: data.name,
                    lastname: data.lastname,
                    id: data.id,
                    userid: responseUser.user.uid
                })
            }*/
        }catch{
            alert("Ocurrio un error!");
        }

        }
  
    

    return(
        <>
              
            <div className='App-home'>
                <div className="container text-center">
                    <div className="row" >
                        <div className="col-sm-5 col-md-6 inner">
                        <form>
                            <div className="form-group">
                                <Controller
                                    name={"name"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                    <TextField onChange={onChange} value={value} label={"Name"} />
                                    )}
                                />
                                 </div>
                                 <div className="form-group">
                                  <Controller
                                    name={"lastname"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                    <TextField onChange={onChange} value={value} label={"Apellido"} />
                                    )}
                                />
                                  </div>
                                  <div className="form-group">           
                                 <Controller
                                    name={"id"}                                    
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                    <TextField onChange={onChange} value={value} label={"ID"} type={"number"}/>
                                    )}
                                />
                                  </div>
                                  
                                  <div className="form-group">           
                                 <Controller
                                    name={"email"}
                                    
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                    <TextField onChange={onChange} value={value} label={"Email"} type={"email"}/>
                                    )}
                                />
                                  </div>
                                  <div className="form-group">
                                 <Controller
                                    name={"pass"}                                    
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                    <TextField onChange={onChange} value={value} label={"Pass"} type={"password"} />
                                    )}
                                />
                                  </div>
                                  <div className="form-group">
                                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                                <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
                                </div>
                                </form>

                           {/*} <form>
                            
                                <h2 >Formulario de registro</h2>
                                <div className="form-group">
                                <div className="form-wrapper label-fomBlack">
                                
                                <InputClass name_for="nombre"  title="Nombre" type_input="text" placeholder="nombre" text_valid="Este campo es necesario" />
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="apellido"  title="Apellido" type_input="text" placeholder="Apellido" text_valid="Este campo es necesario" />
                               
                                </div>
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="email"  title="Email" type_input="email" placeholder="email" text_valid="Verifique el email"  />
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="password"  title="Password" type_input="password" placeholder="Password" text_valid="Campo necesario, ingrese un valor valido"  {...register("password")}/>
                  
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="password"  title="Confirme paswword" type_input="password" placeholder="Password" text_valid="Campo necesario, ingrese un valor valido"/>
                  
                                </div>
                                <div className="checkbox label-fomBlack-term">
                                <label>
                                <input type="checkbox"/> Aceptar politicas de uso &amp; Privacy Policy.
                                <span className="checkmark"></span>
                                </label>
                                </div>
                      
                     
                              
    </form>*/}
                        </div>
                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <div className='label-fomBlack'>
                            <h2>Nosotros</h2>
                            <p>
                                <strong>Lorem Ipsum</strong> 
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            
                              <div>

                           
                              </div>
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home