import React from 'react'
import '../../../css/AlterarSenha.css'

const UserPadrao = ({infoUser, setUsers, users}) => {
    const [senha, setSenha] =React.useState({senhaAntiga: '', novaSenha: '', repetirSenha: ''});
    const [mensagem, setMensagem] = React.useState({texto: '', cor: ''});

    function editarUsuario(e){
      e.preventDefault();


      if(!(infoUser[0].senha === senha.senhaAntiga))return setMensagem({texto: 'Senha atual invalida!!', cor:'red'})
      if(!(senha.novaSenha === senha.repetirSenha))return setMensagem({texto: 'As senhas não conferem!', cor:'red'})


      infoUser[0].senha = senha.novaSenha;

      fetch(`http://localhost:3000/api/v1/users/${infoUser[0].id}`, {
        method: "PUT",
        body: JSON.stringify(infoUser[0]),
        headers: {
            "Content-Type": "application/json",
        },

    }).then(x =>{

        if(x.status !== 200) {
                const v = fetch('http://localhost:3000/api/v1/users/')
        
                v.then(x => x.json()).then(z => setUsers(z))
            return setMensagem({texto: 'erro no Formulario!!', cor: 'red'})}
    });


      return setMensagem({texto: 'Senha alterada', cor:'green'})
    }


  return (
    <>
        <h2 className='titulo'>Usuario Padrao</h2>

        <form className='box-senha' onSubmit={editarUsuario}>

          <label>
            Senha Atual:
            <input onChange={({target}) => setSenha({...senha, senhaAntiga: target.value})} type="password" />
          </label>

          <label>
            Nova Senha:
            <input onChange={({target}) => setSenha({...senha, novaSenha: target.value})}  type="password" />
          </label>

          <label>
            Repita Nova Senha:
            <input onChange={({target}) => setSenha({...senha, repetirSenha: target.value})} type="password" />
          </label>

          
          <span className='mensagem'>{<p style={{color: mensagem.cor}}>{mensagem.texto}</p>}</span>


          <button className='btn-senha'>Alterar</button>
        </form>
    </>
  )
}

export default UserPadrao