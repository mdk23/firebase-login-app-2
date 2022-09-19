import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';

function Account() {

  const {user,logOut}=UserAuth()

  const navigate=useNavigate();
  const handleSignOut=async ()=>{
    try {
      await logOut()
    } catch (error) {console.log(error) }
  }

 

  return (
    <div>
      <p>Bem-Vindo {user?.displayName}</p>
     <button onClick={handleSignOut}>Sair da Aplicação </button>
    </div>
  )
}

export default Account