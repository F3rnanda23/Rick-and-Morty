import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About.';
import Form  from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


const email= 'mfarriag@gmail.com';
const password = '112233';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const location = useLocation(); 
   const navigate= useNavigate();
   const [characters, setCharacters] = useState ([]);
   const [access, setAccess] = useState (false);
  

   const login = async (userData) =>{
      try {
         const { email, password } = userData;
         const { data }= await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
        
      } catch (error) {
         return { error: error.message }
      }
    
   }   

   useEffect(() =>{
      !access && navigate('/');
   }, [access])

   const onSearch= async (id) => {
      try {
         const randomId = Math.floor(Math.random() * 826) + 1;
         const { data }= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
            if (data.name) {
               const char= characters.find((ch)=> ch.id=== Number(id))
               if (char) return alert('ese character ya existe')
               setCharacters((oldChars) => [...oldChars, data]);
            } 
            
         } catch (error) {
            alert('¡No hay personajes con este ID!'); 
         }  
   };

    const onRandom = () => {
      const randomId = Math.floor(Math.random() * 671) + 1;
      onSearch(randomId.toString());
    }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters (charactersFiltered)
   }
  
// fondos
useEffect(() => {
   const body = document.querySelector('body');
   if (location.pathname === '/home') {
     body.classList.add('body-home');
     body.classList.remove('body-main');
     body.classList.remove('body-detail'); 
   } else if (location.pathname.startsWith('/detail')) {
     body.classList.add('body-detail');
     body.classList.remove('body-main');
     body.classList.remove('body-home'); 
   } else {
     body.classList.add('body-main');
     body.classList.remove('body-home');
     body.classList.remove('body-detail'); 
   }
 }, [location]);
   

   return (
      <div className='App'>

         {
            location.pathname !== '/' ?  <Nav onSearch={onSearch }  setAccess={setAccess} onRandom={onRandom}/> : null
         }
        
         

         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={""}/>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/Favorites" element={<Favorites/>}/>

         </Routes>

          
      </div>
   );
}

export default App;
 