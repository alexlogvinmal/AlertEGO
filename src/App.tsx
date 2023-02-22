import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { News } from "./components/News";
import { Login } from './components/Login';
import { Profile } from './components/Profile';


export function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </>
  )
};

