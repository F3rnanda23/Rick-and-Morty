const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character= {
    id: '960',
    name: 'fer',
    species: 'Human',
    gender: 'female',
    status:'Alive',
    origin:  {
        name: 'Earth (c-137)'
    },
    image: 'image.jpg'
  
};

describe( "Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it( 'Responde con status: 200', async ()=> {
            const response = await request.get('/rickandmorty/character/1')// espero que cuando haga llamado a esta ruta
            expect(response.statusCode).toBe(200);// su statusCode sea de 200
        });

        it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
        async()=>{
            const response =  await request.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }
        });

        it( 'Si hay un error responde con status: 500', async ()=>{
            const response =  await request.get('/rickandmorty/character/12154f')
            expect(response.statusCode).toBe(500);
        });
    });

    describe( "GET /rickandmorty/login", ()=> {
        it('Responde con un objeto con propiedad access en true si la informacion del usuario es valida', async()=>{
            const response =  await request.get('/rickandmorty/login?email=mfarriag@gmail.com&password=112233')
            const access= { access: true }
            expect(response.body).toEqual(access);
        });
        it('Responde con un objeto con propiedad access en false si la informacion del usuario es inválida', async()=>{
            const response =  await request.get('/rickandmorty/login?email=mfarrig@gmail.com&password=123456')
            const access= { access: false }
            expect(response.body).toEqual(access);
         })
        
    });

    describe("POST /rickandmorty/fav", ()=>{
        it('Debe guardar el personaje en favoritos', async ()=>{
            const response =  await request.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)// toContain es para numeros o string y toContainEqual objeto o array
        })

        it('Debe agregar personajes en favoritos sin eliminar los existentes', async ()=>{
            character.id=125; // le modificamos al obj creado arriba, el id y el name para crear otro obj diferente, ahora tenemos 2
            character.name='maria';
            const response =  await request.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)// toContain es para numeros o string y toContainEqual objeto o array
        });
    });

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it('Si el ID solicitado no existe, deberia retornar un arreglo con todos los personajes favoritos', async ()=>{
            const response =  await request.delete('/rickandmorty/fav/2')
            expect(response.body.length).toBe(2)
        } )
    })

})