import { useState } from "react";
import  style from './SearchBar.module.css';

export default function SearchBar({onSearch, onRandom }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange= {handleChange} value={id} className={style.input}/>
         <button className={style.btn2} onClick={() => {onSearch(id); setId('')}}>Agregar</button> 
         <button  className={style.btn2} onClick={onRandom}>Random</button>
      </div>
   );
}
