import React from 'react'
import PaginaCriarUsuario from './PaginaCriarUsuario';
import EditUsers from './EditUsers';


const UserAdm = ({setUsers, users}) => {

  return (
    <div className='pagina-usuarios'>
    
    <PaginaCriarUsuario users={users} setUsers={setUsers} />
    <EditUsers users={users} setUsers={setUsers} />

</div>
  )
}

export default UserAdm 