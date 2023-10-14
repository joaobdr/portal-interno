import React from 'react';
import Header from './module/Header/Header';
import Users from './module/Senha/Users';
import Home from './Home';
import Dashboard from './module/Dashboard/Dashboard';
import Estoque from './module/Estoque/Estoque';
import Footer from './module/Footer/Footer';
import Pendencias from './module/Pendencias/Pendencias';



const Main = ({infoUser, setLogin}) => {
  const [page, setPage] = React.useState('home');


  function paginacoes(){
    if(page === 'user') return <Users infoUser={infoUser}/>
    if(page === 'tema') return console.log('O Tema Foi alterado');
    if(page === 'home') return <Home  setPage={setPage}/>;
    if(page === 'estoque') return <Estoque />
    if(page === 'dashboard') return <Dashboard />
    if(page === 'pendencias') return <Pendencias infoUser={infoUser} />

    return null
  }


  return (<>
    <Header infoUser={infoUser} setLogin={setLogin} setPage={setPage}/>
      <main>
        {paginacoes()}
      </main>
    <Footer />
    </> )
}

export default Main