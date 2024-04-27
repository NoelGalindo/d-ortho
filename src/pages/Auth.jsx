import {Link} from 'react-router-dom';
import { useState } from 'react';
import logo from '../../src/images/logo.png';
import '../css/Auth.css';
import '../css/fonts.css';
import PropTypes from 'prop-types';
import { toastifyError, toastifySuccess } from '../components/toastify';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export function LoginForm({setToken}){
    const [email, setEmial] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async e => {
        e.preventDefault();
        const credentials = {"username": email, "password":password}
        try{
            const token = await loginUser(credentials);
            toastifySuccess("Bienvenido", 1000)
            setToken(token);
        }catch(err){
            toastifyError("Error de credenciales", 1000)
        }
    
    }

    return(
       <section className="main-container">
            <div className="form-container col-10 col-sm-10 col-md-8 col-lg-5 roboto-regular">
                <form onSubmit={handleSubmit}>
                    <div className="form-header">
                        <img src={logo} height="40%" width="40%" /> <br />
                    </div>
                    <div>
                        <p className="roboto-bold">E-MAIL</p>
                        <input className="form-control" onChange={e => setEmial(e.target.value)} placeholder="e-mail" type="email" required></input><br />
                    </div>
                    <div>
                        <p className="roboto-bold">Contraseña</p>
                        <input className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Contraseña" type="password" required></input>
                    </div>
                    <br />
                    <button type="submit" className="btn-login">Ingresar</button>
                </form>
            </div>
       </section>
    );

}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  }

