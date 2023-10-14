import React from 'react'
import '../../../css/Footer.css'
import Versao from './Versao';
import Creditos from './Creditos';

const Footer = () => {

  const [info, setInfo] = React.useState(false);
  const [tela, setTela] = React.useState('');

  function ativarTela(){
  
    if(tela === 'versao') return <Versao  setTela={setTela}/>
    if(tela === 'creditos') return <Creditos setTela={setTela}/>

    return null
  }
  

  return (
    <footer>
      {tela ? ativarTela() : null}
        <div>
            <ul style={{display: 'flex', width:' 100%'}}>
                <li className='li'><p onClick={() => setTela('versao')}><em>Versão: 1.0.0</em> </p></li>
                <li className='li'><p onClick={() =>setTela('creditos')}>João Victor Barbosa</p></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer