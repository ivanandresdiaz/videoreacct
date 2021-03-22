import React from 'react';
const Search=()=>{
    return(
        <React.Fragment>
            <section className="main">
                <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..."/>   
            </section>
        </React.Fragment>
        
    )
}
export default Search;