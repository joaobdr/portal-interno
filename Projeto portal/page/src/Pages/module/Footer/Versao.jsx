import React from 'react'

const Versao = ({setTela}) => {

    function handleKeyPress({keyCode}){
        if(keyCode === 27) return setTela('');

        return null
    }

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);


  return (    
    <section onClick={({target}) => target.className === 'versionamento' ? setTela('') : null} className='versionamento'>
        <div  className='box-versionamento'>
            <ul className='ver'>
                <h2 className='titulo-versao'>Versão 1.0.0</h2>
                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>

            </ul>

            <ul className='ver'>
                <h2 className='titulo-versao'>Versão 1.0.1</h2>
                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>


                <li className='li-versao'>
                    Disponibilização da pagina 'Alterar senha'
                   <span className='li-subversao'>Diferenciando ADMs de Usuarios padrao</span>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default Versao