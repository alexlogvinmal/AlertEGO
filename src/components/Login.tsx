import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { logIn } from '../redux/auth/actions';
import { LogInStatus } from '../redux/types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function Login() {

  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (login.status) {
      return navigate("/profile");
    }
  }, [login.status]);

  function changeLogIn(){
    localStorage.setItem("status", "true");
    dispatch(logIn())
  }


  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)<ButtonProps>((theme) => ({
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      backgroundColor:'rgba(0, 0, 0, 0.87)',
    },
  }));

  function onSubmit(){
    console.log(username, password)
    if(username=='admin' && password=='12345'){
      localStorage.setItem("status", "true");
      dispatch(logIn());

    }else{
      setError(true)
    }
  }
  

  return (
    <>
      <h1>{t('menu.loginform')}</h1>
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <TextField error={error}
          label={t('menu.username')}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={e=>setUsername(e.target.value)}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">{t('menu.password')}</InputLabel>
          <OutlinedInput error={error} onChange={e=>setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                onClick={()=>setShowPassword((show) => !show)}
                onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <ColorButton variant="contained" onClick={onSubmit}>{t('menu.login')}</ColorButton>  
    </Box>
    <Snackbar open={error} autoHideDuration={6000} onClose={e=>setError(false)}>
        <Alert onClose={e=>setError(false)} severity="error" sx={{ width: '100%' }}>
        {t('menu.error')}
        </Alert>
      </Snackbar>
    </>
  )
};

