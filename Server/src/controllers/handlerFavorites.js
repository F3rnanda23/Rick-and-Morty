

let myfavorites = [];

const postFav = (request, response) =>{
     const character = request.body;
     myfavorites.push(character)

     return response.status(200).json(myfavorites);
};

const deleteFav = (request, response) => {
    const { id } = request.params;

     myfavorites= myfavorites.filter((favorite)=> favorite.id !== +id); // ell + es para parsear a id, ahora paso de string a numero

    return response.status(200).json(myfavorites);

};

module.exports= {
    postFav,
    deleteFav
}