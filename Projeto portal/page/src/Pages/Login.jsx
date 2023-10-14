import React from 'react';
import '../css/Login.css'

const Login = ({setLogin, setInfoUser}) => {
  const [erroLogin, setErroLogin] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [user, setUser] = React.useState({login: '',senha:''});
  const [data, setData] = React.useState('');


  setInterval(() => {
    const min = new Date().getMinutes();
    const hor = new Date().getHours();

    setData(`${hor}:${min <= 9 ? '0' + min : min}`)    
  }, 1000);

  function onSubmit(e){
    setLoad(true);
    e.preventDefault();


    fetch(`http://localhost:3000/api/v1/users/${user.login}/${user.senha}`).then(x =>{

    if(x.status === 404) setErroLogin(true);
    if(x.status === 200){
       setErroLogin(false);
       setLogin(true);
       return x.json();
      };
    }).then(z =>setInfoUser(z))
    setLoad(false);

  }

  return (
    <div className='pagina-de-login'>
      <section className='box'>
        <form className='form' onSubmit={onSubmit}>
            <img className='logo-user' src="./src/Files/imgs/user-logo.svg" alt="" />


            <div className='preencher-formiario'>
              <div className='login'>
                <label htmlFor="nome">Usuario:</label>
                <input type="text" id='nome' name='nome' onChange={({target}) => setUser({...user, login: target.value})}/>
              </div>

              <div className='login'>
                <label htmlFor="senha">Senha:</label>
                <input type="password" id='senha' name='senha' onChange={({target}) => setUser({...user, senha: target.value})} />
              </div>

              <span className='invalid-login'>{erroLogin ? 'Usuario Invalido!!' : null}</span>

              <button className='btn-login'>Entrar</button>
            </div>
        </form>
        
      </section>

      <div className='data-hota'>
        <span className='versao'>Versão: 1.0.0</span>
        <span className='data'>{data}</span>
      </div>
    </div>
  )
}

export default Login