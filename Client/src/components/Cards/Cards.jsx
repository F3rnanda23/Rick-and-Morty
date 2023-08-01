import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {     
   const gifBackgroundUrl = 'https://media.giphy.com/media/3og0IyRiAsl1Pczi6Y/giphy.gif';            //cards aqui no es una funcion
   return (
      <div className= {style.contenedor} style={{ backgroundImage: `url(${gifBackgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         {
            characters.map(({id,name,status,species,gender,origin,image}) => {
               return (
                  <Card
                   key={id} 
                   id={id}
                   name={name}
                   status={status}
                   species={species}
                   gender={gender}
                   origin={origin.name}
                   image={image}
                   onClose={onClose}
                    />
               )
            })
         }
      </div>
   )
}
 