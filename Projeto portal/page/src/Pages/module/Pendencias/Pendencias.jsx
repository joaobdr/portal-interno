import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';
import Tarefas from './Fragmentos/Tarefas';





const Pendencias = ({infoUser}) => {
  const [info, setInfo] = React.useState(null);

  React.useEffect(()=>{
    fetch('http://localhost:3001/').then(j => j.json()).then(z => setInfo(z))
  }, [])


  function tarefas(){


    return <Tarefas info={info} infoUser={infoUser}/>
  }




  return (
    <div>
      <Helmet>
        <title>Portal interno - Pendencias.</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>

      <h1 className='titulo'>Pendencias do setor.</h1>

      <button className='add-tarefas'>Adcionar Tarefa</button>

      <br />

      <section className='box-tarefas'>
        {info ? tarefas() : <p className='load-tarelas'>Carregando...</p>}
      
        <ul></ul>
      </section>
    </div>
  )
}

export default Pendencias