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

    return (
    <>
    <h1>Profile</h1>
    <button onClick={e=> dispatch(logOut())}>Log Out</button>
    </>
    ) 
  };
  
  