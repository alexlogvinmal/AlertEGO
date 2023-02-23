import { useState } from 'react';
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

export default function Alltype() {
  const [showPassword, setShowPassword] = useState(false);


  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      backgroundColor:'rgba(0, 0, 0, 0.87)',
    },
  }));


  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <TextField
          label="Username"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={e=>console.log(e.target.value)}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput onChange={e=>console.log(e.target.value)}
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
        <ColorButton variant="contained">Log In</ColorButton>
    </Box>
  );
}