import React from 'react'
import '../../../css/Usuarios.css'
import UserAdm from './UserAdm';
import UserPadrao from './UserPadrao';

const Users = ({infoUser}) => {

  const [users, setUsers] = React.useState(null);


  const v = fetch('http://localhost:3000/api/v1/users/')
  v.then(x => x.json()).then(z => setUsers(z))


  if(infoUser[0].cargo === 'adm') return <UserAdm setUsers={setUsers} users={users}/>
  if(infoUser[0].cargo === 'padrao') return <UserPadrao setUsers={setUsers} users={users} infoUser={infoUser} />


  return null


}

export default Users