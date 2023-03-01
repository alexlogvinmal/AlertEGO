import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import News from "./components/News";
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {

  return (
    <>
      <Header />
      <Container fixed sx={{ backgroundColor: 'white', flexGrow: '1', boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
        <Box sx={{ minHeight: '40rem', textAlign: 'center', paddingTop: '1rem' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
      <Box sx={{ flexShrink: '0' }}>
        <Footer />
      </Box>
    </>
  )
};
export default App;
