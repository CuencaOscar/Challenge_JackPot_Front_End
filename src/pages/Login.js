import React, { useState } from 'react';
import '../css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getUser } from '../services/services'
import { Link } from 'react-router-dom';

const Login = () => {

  const [datos, setDatos] = useState("");

  const [m, setM] = useState(0);

  const setUser = (data) => {
    localStorage.setItem("email", data.user.email)
    localStorage.setItem("id", data.user.id)
    localStorage.setItem("credit", data.credit)
    localStorage.setItem("indice", [1,2,3])
  }

  const handleInputChange = (e) => {
    setDatos(e.target.value)
  }

  const handleSubmit = async (e) => {
    await getUser({ email: datos }, setUser)
    setM(2)
  }

  return (
    <div className='background'>
      <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <label>Email: </label>
          <br />
          <input
            type="email"
            className='form-control'
            onChange={e => handleInputChange(e)}
          />
          <br />
          {
            m === 2
              ?
              <Link to="/JackPot">
                <button className='btn btn-primary'>
                  Go
                </button>
              </Link>
              :
              <button className='btn btn-primary' onClick={handleSubmit}>
                Log in
              </button>
          }
        </div>
      </div>
    </div>
  )
};

export default Login;