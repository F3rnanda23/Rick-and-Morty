import SearchBar from "../SearchBar/SearchBar";
import {Link } from 'react-router-dom';

    const Nav = ({onSearch, onRandom }) => {
        return (
          
            <div>
                <nav>
                    <SearchBar onSearch={onSearch} onRandom={onRandom}/>
                </nav>

                <div>
                    <button>
                        <Link to='/about'>About</Link>
                    </button>
                    <button>
                        <Link to='/home'>Home</Link>
                    </button>
                </div>
            </div>

        )
    }
export default Nav;