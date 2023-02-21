import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector} from '../redux/hook';
import { logIn } from '../redux/auth/actions';
import { LogInStatus } from '../redux/types';

export function Login() {
 
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  useEffect(() => {
    if (login.status){
       return navigate("/profile");
    }
 },[login.status]);

    return (
    <>
      <h1>Login</h1>
      <button onClick={e=> dispatch(logIn()) }>Log In</button>
    </>
      ) 
  };
  
  