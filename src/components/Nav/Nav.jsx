import SearchBar from "../SearchBar/SearchBar";
import {Link, useNavigate } from 'react-router-dom';
import  style from './Nav.module.css';

    const Nav = ({onSearch, setAccess, onRandom }) => {
        const navigate= useNavigate()

        const handleLogOut= () => {
            setAccess(false);
            navigate('/');
        }

        return (
          
            <div className={style.barra1}>
                <nav>
                    <SearchBar onSearch={onSearch} onRandom={onRandom}/>
                </nav>
                <br />

                <div className={style.barra2}>
                    <button className={style.btn1}>
                        <Link to='/about'>About</Link>
                    </button>

                    <button className={style.btn1}>
                        <Link to='/home'>Home</Link>
                    </button>

                    <button onClick={handleLogOut} className={style.btn1}>Log Out</button>
                </div>
            </div>

        )
    }
export default Nav;