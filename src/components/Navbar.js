import { async } from '@firebase/util';
import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import '../styles/navbar.css';

function Navbar() {

  const {user,logOut}=UserAuth()


  const handleSignOut=async ()=>{
    try {
      await logOut()
    } catch (error) {console.log(error) }
  }

  return (
    <div className='container'>
          <h1>Firebase Google Auth & Context & React Router </h1>
        {user?.displayName ? <h2 onClick={handleSignOut}>Loggout</h2>: <Link to="/signin"> <h2>Sign In </h2> </Link>}
         
    </div>
  )
}

export default Navbar