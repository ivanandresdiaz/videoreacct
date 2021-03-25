import React from 'react';
import Header from '../components/Header';
import '../assets/styles/Header.scss';
const NotFound=()=>{
    return(
        <React.Fragment>
            <Header/>
            <h1>No encontrado</h1>
            <p>Regresa Al Home</p>
        </React.Fragment>
    )
}
export default NotFound;