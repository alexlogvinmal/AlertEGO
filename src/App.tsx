import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main  from './components/Main';
import News  from "./components/News";
import Login from './components/Login';
import Profile  from './components/Profile';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function App() {


  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor:'white', boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
        <Box sx={{ minHeight: '40rem', textAlign:'center', paddingTop:'1rem' }}>
          <Routes>
            <Route path="/AlertEGO" element={<Main />} />
            <Route path="/AlertEGO/news" element={<News />} />
            <Route path="/AlertEGO/profile" element={<Profile />} />
            <Route path="/AlertEGO/login" element={<Login />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Box>
      </Container>
      <Footer/>
    </>
  )
};
export default App;
