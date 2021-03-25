import React, {useState} from 'react';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/index';
import {Link} from 'react-router-dom';
import '../assets/styles/Register.scss'
import Header from '../components/Header';
const Register=(props)=>{
  const [form, setValues]=useState({
    email:'',
    name:'',
    password:'',
  });
  const handleInput=event=>{
    setValues({
      ...form,
      [event.target.name]:event.target.value,
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
    console.log(form)
  }
    return(
    <React.Fragment>
      <Header isRegister/>
      <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input className="input" type="text" onChange={handleInput} name="name" placeholder="Nombre"/>
          <input className="input" type="text" placeholder="Correo"
          onChange={handleInput} name="email"/>
          <input className="input" type="password" placeholder="Contraseña" onChange={handleInput} name="password"/>
          <button className="button">Registrarme</button>
        </form>
        <Link to="/">Iniciar sesión</Link>
      </section>
    </section>
  </React.Fragment>
);}
const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);