import {Link } from 'react-router-dom';
import  style from "./Card.module.css"
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState (false);

   const handleFavorite= () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.container}> 
                 
         
         {onClose && <button onClick={() => onClose (id)} className= {style.closeButton}>X</button>}
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />

         <div>
             <Link to={`/detail/${id}`} >
                <h3 className="card-name">{name}</h3>
            </Link>
         </div>

         <div>
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
        </div>   
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => {dispatch(addFav(character)) },
      removeFav: (id) => {dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,

)(Card);