import React from 'react'

const Creditos = ({setTela}) => {

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
        <section  onClick={({target}) => target.className === 'versionamento' ? setTela('') : null} className='versionamento'>
        <div className='box-versionamento'>
            asdads
        </div>
    </section>
  )
}

export default Creditos