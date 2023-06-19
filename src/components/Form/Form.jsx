import {useState} from "react";
import validation from "../validation/validation";

const Form =({login}) =>{
    const [errors, setErrors] = useState({
        email: '',
        password:''
    })

    const [userData, setUserData] = useState({
        email: '',
        password:''
    });


        const handlerChange= (event) =>{
            setUserData({
                ...userData,
                [event.target.name] : event.target.value
            })

            setErrors(validation({
                ...userData,
                [event.target.name] : event.target.value
            }))
        }

        const handleSubmit = (event) =>{
            event.preventDefault();
            login(userData);
        }
    
    
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={userData.email} onChange={handlerChange} />
                {errors.email && <p>{errors.email }</p>}

                <hr/>
                
                <label htmlFor="password">Password: </label>
                <input type="password"  name="password" value={userData.password} onChange={handlerChange} />
                {errors.password && <p>{errors.password }</p>}


                <button>Submit</button>
            </form>
        )
    }    

    export default Form; 