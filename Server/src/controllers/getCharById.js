const axios =require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (request, response)=> {
    try {
        const { id }= request.params;
       const { data } = await axios(`${URL}/${id}`)
       
            if(!data.name) throw new Error( `Falta datos del personaje con ID: ${id}`); //si aqui id esta en mayuscula  // este es el mensaje de error
            if(data.name){
                const character = {
                    id: data.id,
                    status: data.status, 
                    name:data.name,
                    species:data.species, 
                    origin:data.origin, 
                    image: data.image, 
                    gender:data.gender
                }
                return response.status(200).json(character)
            }

    } catch (error) {
        return  error.message.includes('ID') // aqui id tambien debe ir en mayuscula
        ? response.status(404).send(error.message)
        : response.status(500).send(error.message)// siempre que manipulamos string se utiliza el send, cuando se mandan obj se utiliza json
    }
    // esto quiere decir si el error.message es el que me manda try arrojo un 404,
    //si el error.message no es ese, te mando un 500
    // en la propiedad message de error es donde nos llega el mensaje de error
    

}

module.exports= {
    getCharById
}