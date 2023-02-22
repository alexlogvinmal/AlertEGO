import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogInStatus } from '../redux/types';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { logIn, logOut } from '../redux/auth/actions';
import { useTranslation } from 'react-i18next';


export function Header() {

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


    const { i18n, t } = useTranslation();

    function changeLanguage(lng: any) {
        i18n.changeLanguage(lng);
    }


    return (
        <>
            <div>
                <Link to={`/`}>{t('menu.main')}</Link>
                <Link to={`/news`}>{t('menu.news')}</Link>
                {login.status ? <Link to={`/profile`}>{t('menu.profile')}</Link> : <Link to={`/login`}>{t('menu.login')}</Link>}
            </div>
            <div>
                {login.status ? <p>Log In</p> : <p>Not Log In</p>}
            </div>
            <div>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('ua')}>UA</button>
            </div>
        </>
    )
};

