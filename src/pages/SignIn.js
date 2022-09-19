import React, { useEffect } from 'react'
import {UserAuth} from "../context/AuthContext"

import { useNavigate } from 'react-router-dom';

function SignIn() {
  const {googleSignIn,user} =UserAuth(); //forma de ter acesso a função que pois não tem export

  const navigate=useNavigate();

  const handleGoogleSingIn= async ()=>{
    try{
      await googleSignIn();

    }catch(error){console.log(error)}
  }

  useEffect(()=>{
    if(user!=null){
      navigate('/account');
    }
  },[user]);
  
  return (
    
    <button onClick={handleGoogleSingIn}>Entrar com Google </button>
  )
}

export default SignIn