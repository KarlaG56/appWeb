import '../../assets/styles/formulario.css'
import Button from '../atoms/Button';
import Valor from "../atoms/InputT";

function Formulario(){
    return(
        <div className='body'>
            <br /><br />
            <form action="" >
           
            <h1 className="titulo">Registro</h1>
            <br />

              <Valor value={"Nombre"} type={"text"} id={"name"} placeholder={"Nombre"}  />
            
              <Valor value={"apellido"} type={"text"} id={"apellido"} placeholder={"Apellido"}  />

              <Valor value={"usuario"} type={"text"} id={"usuario"} placeholder={"Usuario"}  />

              <Valor value={"rfc"} type={"text"} id={"rfc"} placeholder={"RFC"}  />

              <Valor value={"Correo"} type={"email"} id={"email"} placeholder={"Correo electronico"}  />

                <p>Fecha de nacimiento</p>
              <Valor value={"Fecha"} type={"date"} id={"date"} placeholder={"Fecha de nacimiento"} />
             
              <Valor value={"Contraseña"} type={"password"} id={"password"} placeholder={"Contraseña"}  />

              <Valor value={"Contraseña"} type={"password"} id={"password"} placeholder={"Confirmar contraseña"}  />
            
            <Button></Button>

            
            </form>
      
        </div>
        );
        
}

export default Formulario;