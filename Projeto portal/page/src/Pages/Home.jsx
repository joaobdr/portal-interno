import React from 'react'
import '../css/Home.css';


const Home = ({setPage}) => {
  return (
    <div>
        <h2 className='titulo'>Home principal</h2>

      <nav className='nav'>
        <ul className='box-nav'>
          <li onClick={()=> setPage('dashboard')}>
            <h1>Dashboard</h1>
            <p>DashBoard dos Sistemas internos</p>
            <img src="../../src/Files/imgs/dashboard.svg" alt="" />
          </li>


          <li onClick={() => setPage('estoque')}>
            <h1>Estoque</h1>
            <p>Estoque de suplementos e equipamentos do setor</p>
            <img src="../../src/Files/imgs/estoque.svg" alt="" />
          </li>

          <li onClick={()=> setPage('pendencias')}>
            <h1>Pendencias</h1>
            <p>Estoque de suplementos e equipamentos do setor</p>
            <img src="../../src/Files/imgs/card-checklist.svg" alt="" />
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Home