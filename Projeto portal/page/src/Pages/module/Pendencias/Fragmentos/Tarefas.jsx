import React from 'react'

const Tarefas = ({info, infoUser}) => { 

  console.log(info[0].time);
  const teste = new Date(info[0].time);

  console.log(teste.getTime());
  const data = new Date()
  console.log(data);

  console.log('-----------------------------');
  console.log(((data.getTime() - teste.getTime()) / 1000) / 60);
  console.log('-----------------------------');


  return <section className='section-lista-tarefas'>
           <div>
            <ul className='ul-lista-tarefas'>
              <li className='li-lista-tarefas'>
                <p className='numero-tarefas'>N°</p>
                <p className='titulo-tarefas'>Titulo</p>
                <p className='status-tarefas'>Status</p>
                <p className='data-tarefas'>Data</p>
              </li>

            </ul>
           </div>
         </section>
}

export default Tarefas