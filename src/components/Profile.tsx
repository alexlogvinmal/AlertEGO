import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../redux/hook';
import { LogInStatus } from '../redux/types';

export function Profile() {


  let navigate = useNavigate();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  useEffect(() => {
    if (login.status==false){
       return navigate("/");
    }
 },[login.status]);


    return (
    <>
    <h1>Profile</h1>
    </>
    ) 
  };
  
  