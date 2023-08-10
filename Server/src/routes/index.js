const router = require('express').Router();


const login = require('../controllers/login');
const { getCharById }= require('../controllers/getCharById');
const postFav = require('../controllers/postFav');
const postUser= require('../controllers/postUser');
const deleteFav= require('../controllers/deleteFav');



router.get('/character/:id',(request, response)=>{
    getCharById(request,response);
});

router.get('/login', login);
router.post('/login', postUser)

router.post('/fav',(request, response)=>{
    postFav(request,response);
});

router.delete('/fav/:id',(request, response)=>{
    deleteFav(request,response);
});


module.exports= router;



