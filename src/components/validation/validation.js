import Form from "../Form/Form";

const validation = (userData) =>{
    const errors= {};

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email='email inválido'
    }
    if(!userData.email){
        errors.email='Debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email='máximo 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){ // .test es un metodo de regex que valida si algo se cumple
        errors.password='password tener al menos un número'
    }
    if(userData.password.length > 10 || userData.password.length < 6){
        errors.password='password debe tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation; 