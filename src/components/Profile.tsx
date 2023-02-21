import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector} from '../redux/hook';
import { logOut } from '../redux/auth/actions';
import { LogInStatus } from '../redux/types';

export function Profile() {

  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  useEffect(() => {
    if (login.status==false){
       return navigate("/");
    }
 },[login.status]);

 function changeLogIn(){
   localStorage.setItem("status", "false");
   dispatch(logOut())
 }

    return (
    <>
    <h1>Profile</h1>
    <button onClick={changeLogIn}>Log Out</button>
    </>
    ) 
  };
  
  