import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import '../assets/styles/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import {logoutRequest} from '../actions/index';
const Header=(props)=>{
    const { user , isLogin, isRegister }=props;
    const hashUser=Object.keys(user).length>0;
    const handleLogout=()=>{
        props.logoutRequest({});
    };
    const headerClass= classNames('header', {
        isLogin,isRegister,
    });
    return(
        <React.Fragment>
            <header className={headerClass}>
                <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
                </Link>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        {hashUser?
                        <img src={gravatar(user.email)} alt={user.email}/>:
                        <img src={userIcon} alt="user Icon default"/>
                        }
                        <p>Perfil</p>
                    </div>
                    <ul>
                        {
                            hashUser?
                            <li><a href="/login">{user.name}</a></li>:
                            null
                        }
                        {
                            hashUser?
                            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
                            :
                            <li><Link to="/login">Iniciar Sesion</Link></li>
                        }
                    </ul>
                </div>
            </header>
        </React.Fragment>
    )
}
const mapStateToProps=state=>{
    return{
        user:state.user
    };
};
const mapDispatchToProps={
    logoutRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)( Header);