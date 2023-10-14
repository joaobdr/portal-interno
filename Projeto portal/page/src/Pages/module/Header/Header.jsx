import React from 'react'
import '../../../css/Header.css'

const Header = ({infoUser, setLogin, setPage}) => {
    const [dropMenu, setDropMenu] = React.useState(false);


  return (
    <header>
        <div className='header'>
        <h1 className='home' onClick={() => setPage('home')}>Home</h1>

        <section className='section-header'>
            <div className='menu-header' onMouseMove={(e)=> setDropMenu(true)} onMouseLeave={() => setDropMenu(false)}>
                <h2 className='user'>{infoUser ? infoUser[0].nome.split(' ')[0] : null}</h2>
                <img src="./src/Files/imgs/person.svg" alt="" />


                {dropMenu ? ( <section className='drop-menu-section' >
                            <ul className='drop-menu'>
                                <li className='menu' onClick={() => setPage('tema')}>Tema</li>
                                <li className='menu' onClick={() => setPage('user')}>Alterar senha</li>
                                <li className='menu' onClick={() => setLogin(false)}>Sair</li>
                            </ul>
                          </section>) : null}
            </div>
        </section>

        </div>
    </header>
  )
}

export default Header