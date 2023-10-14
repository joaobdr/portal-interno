const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors('*'));

const content = [{
    id: 1,
    responsavel: 'João Victor Barbosa',
    data: '11/10/2023',
    titulo: 'Conferencia Trimestral',
    status: 'Em atendimento',
    // time: 1697296987944,
    time: 'Sat Oct 14 2023 12:27:12 GMT-0300 (Horário Padrão de Brasília)',
    descricao: 'Conferencia trimestral realizada nos meses de jan, abri, jul e out.',
    comentarios: [
        {
            autor: 'João Victor Barbosa',
            data: '11/10/2023',
            comentario: 'Papeis da conferencia impresso.'
        },
        {
            autor: 'João Victor Barbosa',
            data: '12/10/2023',
            comentario: 'Em processo de conferencia.'
        }
    ]
    },
    {
        id: 2,
        responsavel: 'Qualquer pessoa',
        time: 1697296954323,
        data: '11/10/2023',
        titulo: 'Configurar tablet manutenção',
        status: 'Finalizado',
        descricao: 'Conferencia trimestral realizada nos meses de jan, abri, jul e out.',
        comentarios: [
            {
                autor: 'João Victor Barbosa',
                data: '11/10/2023',
                comentario: 'Papeis da conferencia impresso.'
            }
        ]
    }];

app.get('/', (req, res)=>{
    
    return res.status(200).json(content)
});



app.listen(3001, ()=>{
    console.log('Servidor liberado na porta');
    console.log('https://localhost:3001/');
})