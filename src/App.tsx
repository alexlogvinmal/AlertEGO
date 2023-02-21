import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { News } from "./components/News";
import { Profile } from './components/Profile';


export function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      <div>
        <Link to={`/`}>Main</Link>
        <Link to={`/news`}>News</Link>
        <Link to={`/profile`}>Profile</Link>
        <Link to={`/login`}>Login</Link>
      </div>
      <div>
        {login ? <p>Log In</p>: <p>Not Log In</p>}
      </div>
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

