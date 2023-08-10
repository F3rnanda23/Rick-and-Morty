const { Favorite }= require('../DB_connection');

const deleteFav= async (req, res)=>{
    try {
        const { id }= req.params;

        await Favorite.destroy({  // esperar que el models favorite  elimine donde el id coincida con el id de params
            where:{
                id
            }
        });

        const allFavorites = await Favorite.findAll() // esperar que el models favorite encuentre a todos
        return res.status(200).json(allFavorites)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

};

module.exports=deleteFav;