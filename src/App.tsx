import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { News } from "./components/News";
import { Profile } from './components/Profile';
import { LogInStatus } from './redux/types';
import { useAppSelector, useAppDispatch } from './redux/hook';
import { logIn, logOut } from './redux/auth/actions';


export function App() {
  const dispatch = useAppDispatch();
  const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

  useEffect(() => {
    const value = localStorage.getItem("status");
    if (value === "true") {
      dispatch(dispatch(logIn()));
    } else if (value === "false") {
      dispatch(dispatch(logOut()));
    }
  }, []);

  return (
    <>
      <div>
        <Link to={`/`}>Main</Link>
        <Link to={`/news`}>News</Link>
        {login.status ? <Link to={`/profile`}>Profile</Link> : <Link to={`/login`}>Login</Link>}
      </div>
      <div>
      {login.status ? <p>Log In</p>: <p>Not Log In</p>}
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

