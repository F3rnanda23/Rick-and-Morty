const users = require('../utils/users');

const login= (request, response)=>  {
    const { email, password } = request.query;

    const userFound= users.find((user)=> user.email === email && user.password === password);

    return userFound? 
    response.status(200).json({access:true})
    :response.status(404).json({access:false})

    // con if seria asi
    // if(userFound) return response.status(200).json ({access: true})
    //return response.status(404).json({access: false})
}

module.exports= {
    login
};