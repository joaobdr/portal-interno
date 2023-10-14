import React from 'react'

const EditUsers = ({users, setUsers}) => {

    const [janelaUsuarios, setJanelaUsuarios] = React.useState(false);
    const [loading, setLoading] = React.useState(null)
    const [formEdit, setFormEdit] = React.useState({
        id: '',
        nome: '',
        login: '',
        senha:'',
        cargo: ''
      });



    function editarUsaurios(e){
        setLoading('Salvando informações...');
        e.preventDefault();

        console.log(formEdit.id);

        fetch(`http://localhost:3000/api/v1/users/${formEdit.id}`, {
                method: "PUT",
                body: JSON.stringify(formEdit),
                headers: {
                    "Content-Type": "application/json",
                },

            }).then(x =>{

                if(x.status !== 200) {
                        const v = fetch('http://localhost:3000/api/v1/users/')
                
                        v.then(x => x.json()).then(z => setUsers(z))
                    return setLoading('erro no Formulario!!')}
            });


        return setLoading('informações ataulizada com sucesso!!');
    }






    return (<>
        <section className='users-list'>
              <h1 className='titulo' style={{marginTop: '100px'}}>Usuarios</h1>
  
              {users ? <ul className='ul-de-usuarios'>
              <li className='detalhe-do-usuarios'>
                              <p>Matricula</p>
                              <p>Nome</p>
                              <p>Login</p>
                              <p>Senha</p>
                              <p>Cargo</p>
                          </li>
                  {users.map((user, y)=>{                
                  return <li key={y} className='detalhe-do-usuarios'>
                              <p>{user.id}</p>
                              <p>{user.nome}</p>
                              <p>{user.login}</p>
                              <p>************</p>
                              <p>{user.cargo}</p>
                              <button onClick={(e) => {setJanelaUsuarios(true);setFormEdit(user)}} className='btn-edit-lixo'><img src="../../src/Files/imgs/edit.svg" alt="" /></button>
                              <button className='btn-edit-lixo'><img src="../../src/Files/imgs/lixo.svg" alt="" /></button>
                          </li>
              })}</ul> : <h3 className='titulo'>Loading...</h3>}
      </section>
  
  
      {janelaUsuarios ? <section className='box-edit-user'>
          <div className='box-edit'>
              <div className='width-btn-fechar'>
                  <button className='btn-fechar' onClick={()=> setJanelaUsuarios(false)}><img src="../../src/Files/imgs/btn-x.svg" alt="" /></button>
              </div>
  
  
              <form className='formulario-editar-usuarios' onSubmit={(e)=> editarUsaurios(e)} >  
                  <label>
                    Matricula:
                    <span className='span-input'>{formEdit.id}</span>
                  </label>
  
                  <label>
                    Nome:
                    <input required type="text" defaultValue={formEdit.nome}  onChange={(e) => setFormEdit({...formEdit, nome: e.target.value})} />
                  </label>
  
                  <label>
                    Login:
                    <input required type="text" defaultValue={formEdit.login}  onChange={(e) => setFormEdit({...formEdit, login: e.target.value})} />
                  </label>
  
                  <label>
                    Login:
                    <input required type="password" defaultValue={formEdit.senha}  onChange={(e) => setFormEdit({...formEdit, senha: e.target.value})} />
                  </label>
  
                  <label>Cargo:
                    <select defaultValue={formEdit.cargo} onClick={(e) => setFormEdit({...formEdit, cargo: e.target.value})}>
                      <option  value="adm">Adm</option>
                      <option value="padrao">Padrao</option>
                    </select>
                  </label>

                  <span className='load'>
                    {loading}
                  </span>
  
                  <button className='btn-edit-user-save'>Salvar</button>
              </form>
  
          </div>
      </section> : null}
    </>
    )
}

export default EditUsers