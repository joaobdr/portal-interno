import React from 'react'

const PaginaCriarUsuario = ({users, setUsers}) => {

    const [formUsuario, setFormUsuario] = React.useState({
        id: '',
        nome: '',
        login: '',
        senha: '',
        cargo: 'padrao'
    });
    const [erro, setErro] = React.useState({mensagem: '', cor: ''});

    function criarUsuario(e){
        e.preventDefault();

        var er = /^[0-9]+$/.test(formUsuario.id);

        if(!er)return setErro({mensagem:'Matricula deve conter somente Numeros!!', cor: 'red'});


        fetch(`http://localhost:3000/api/v1/users/`, {
                method: "POST",
                body: JSON.stringify(formUsuario),
                headers: {
                    "Content-Type": "application/json",
                },

            }).then(x =>{
                if(x.status !== 201) {
                        const v = fetch('http://localhost:3000/api/v1/users/')
                        v.then(x => x.json()).then(z =>setUsers(z))

                    return setErro({mensagem: "Usuario já cadastrado", cor: 'red'})}
            });
        setErro({mensagem: "criando usuario...", cor:'black'});



        return setErro({mensagem: "usuario cadastrado com sucesso!!", cor: 'green'});
    }

  return (
    <>
        <h2 className='titulo-usuarios'>Criar novo Usuário</h2>

        <form className='edit-user-div' onSubmit={(e) => criarUsuario(e)}>
        <ul className='edit-user'>
            <li>
            <label htmlFor="matricula">
                Matricula:
                <input required id="matricula" type="text" onChange={(e)=> setFormUsuario({...formUsuario, id: +e.target.value})} />
            </label>
            </li>

            <li>
            <label htmlFor="nome">
                Nome: 
                <input required id="nome" type="text" onChange={(e)=> setFormUsuario({...formUsuario, nome: e.target.value})}/>
            </label>
            </li>

            <li>
            <label htmlFor="login">Login:
                <input required id="login" type="text" onChange={(e)=> setFormUsuario({...formUsuario, login: e.target.value})}/>
            </label>
            </li>

            <li><label htmlFor="senha">Senha:<input required id="senha" type="password" onChange={(e)=> setFormUsuario({...formUsuario, senha: e.target.value})}/></label></li>

            <li>
            <label htmlFor="cargo">
                Cargo: 
                <select onClick={(e) => setFormUsuario({...formUsuario, cargo: e.target.value})} required name="cargo" id="cargo">
                    <option value="padrao">padrao</option>
                    <option value="adm">adm</option>
                </select>
            </label>
            </li>

            <li>
            <button className='btn-save'><img src="./src/Files/imgs/save.svg" alt="" /></button>
            </li>

        </ul>
        </form>

        <h2 className='user-erro'>{<p style={{color: erro.cor}}>{erro.mensagem}</p>}</h2>
    </>
  )
}

export default PaginaCriarUsuario