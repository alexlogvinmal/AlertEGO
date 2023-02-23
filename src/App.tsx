import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { News } from "./components/News";
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alltype from './components/Alltype';

function App() {


  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor:'white', boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
        <Box sx={{ minHeight: '40rem', textAlign:'center', paddingTop:'1rem' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Alltype/>} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </Box>
      </Container>
    </>
  )
};
export default App;
