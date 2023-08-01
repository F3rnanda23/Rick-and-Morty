const { login }= require('../controllers/login');
const { getCharById }= require('../controllers/getCharById');
const { postFav, deleteFav }= require('../controllers/handlerFavorites');
const router = require('express').Router();

router.get('/character/:id',(request, response)=>{
    getCharById(request,response);
} )

router.get('/login', login);

router.post('/fav',(request, response)=>{
    postFav(request,response);
} )

router.delete('/fav/:id',(request, response)=>{
    deleteFav(request,response);
} )


module.exports= router;



