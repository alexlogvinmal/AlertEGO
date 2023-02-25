import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../redux/hook';
import { LogInStatus } from '../redux/types';
import { useTranslation } from 'react-i18next';

export default function Profile() {


  let navigate = useNavigate();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  const { t } = useTranslation();

  useEffect(() => {
    if (login.status==false){
       return navigate("/AlertEGO");
    }
 },[login.status]);


    return (
    <>
    <h1>{t('menu.profile')}</h1>
    <p>{t('menu.text')}</p>
    </>
    ) 
  };
  
  