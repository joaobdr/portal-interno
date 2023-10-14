const express = require('express');
const app = express();
const cors = require('cors')
const port =  3000;
app.use(express.json());
    
app.use(cors('*'))

var users = [{
    id: 1,
    nome: 'Admin',
    login: 'admin',
    senha: 'admin',
    cargo: 'adm'
},
{
    id: 2,
    nome: 'Teste',
    login: 'teste',
    senha: 'teste',
    cargo: 'padrao'
}]

app.get('/api/v1/users', (req, res) =>{
    
    return res.status(200).send(users);
});
app.get('/api/v1/users/:login/:senha', (req, res) =>{
    const user = req.params;
    var F = false;
    const usuarioPessoal = [];

    users.forEach(({login, senha}, y)=>{
        if((login === user.login) && (senha === user.senha)){
            usuarioPessoal.push(users[y])
            F = true;
        }
    })

    if(F) return res.status(200).send(usuarioPessoal);

    
    return res.status(404).send({mensagem: "Usuario não cadastrado"});
});

app.get('/api/v1/users/:matricula', (req, res) =>{
    const user = req.params;
    var F = false;
    const usuarioPessoal = [];

    users.forEach(({id}, y)=>{

        if(id === +user.matricula){
            usuarioPessoal.push(users[y])
            F = true;
        }
    });


    if(F) return res.status(200).send(usuarioPessoal);
    
    return res.status(404).send({mensagem: "Erro não detectado"});
});

app.put('/api/v1/users/:matricula', (req, res) =>{
    const matric = req.params;
    const user = req.body;
    var F = false;

    users.forEach((us, y)=>{

        if(us.id === + matric.matricula){
            users[y] = {
                id: user.id,
                nome: user.nome,
                login: user.login,
                senha: user.senha,
                cargo: user.cargo
            }

            F = true;
        }
    });


    if(F) {
        return res.status(200).send({mensagem: 'usuario Alerado com sucesso!!'})
    }else{
        res.status(404).send({mensagem: 'erro no formulario'})
    }
});


app.post('/api/v1/users/', (req, res) =>{
    const body = req.body;
    var F = false;
    
    users.forEach((user, y) =>{
        if((body.id === user.id) || (body.login === user.login))F = true;
    })

    if(F)return res.status(404).send({mensagem: 'Usuario já cadastrado', cor: 'red'})


    users.push({
        id: body.id,
        nome: body.nome,
        login: body.login,
        senha: body.senha,
        cargo: body.cargo
    });

    return res.status(201).send({mensagem: 'usuario Cadastrado com sucesso!!'});


});


app.listen(port, ()=>{
    console.log('servidor rodando na porta 3000...');
})



















// app.get('/:id', (req, res) =>{
//     const users = {nome: 'joão', id: 1, senha: "cxvcxv8245"}
//     const teste = req.params

//     return res.status(200).send(teste);
// });