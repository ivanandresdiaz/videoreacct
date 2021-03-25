import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {setFavorite , deleteFavorite} from '../actions';
import PlayIcon from '../assets/static/play-icon.png';
import plussIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
const CarouselItem=(props)=>{
    const { id, cover, title, year, contentRating, duration,islist }=props;
    const handleSetFavorite=()=>{
        props.setFavorite(
            {
                id, cover, title, year, contentRating, duration, islist
            }
        );
    }
    const handleDeleteFavorite=(itemId)=>{
        props.deleteFavorite(itemId);
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                    <img
                    className="carousel-item__details--img" 
                    src={PlayIcon}
                    alt="Play Icon"
                    /> 
                    </Link>
                    
                    {
                        islist?
                        <img 
                    onClick={()=>handleDeleteFavorite(id)} 
                    className="carousel-item__details--img" 
                    src={removeIcon} 
                    alt="Remove Icon"/> :
                    <img 
                    onClick={handleSetFavorite} 
                    className="carousel-item__details--img" 
                    src={plussIcon} 
                    alt="Plus Icon"/> 
                    }
                    
                    
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
}
CarouselItem.propTypes={
    cover:PropTypes.string,
    title:PropTypes.string,
    year:PropTypes.number,
    contentRating:PropTypes.string,
    duration:PropTypes.number,
}
const mapDispatchToProps={
    setFavorite,
    deleteFavorite,
}
export default connect(null,mapDispatchToProps)(CarouselItem);