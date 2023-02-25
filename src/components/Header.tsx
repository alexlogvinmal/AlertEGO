import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LogInStatus } from '../redux/types';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { logIn, logOut } from '../redux/auth/actions';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';



export default function Header() {

    const dispatch = useAppDispatch();
    const login: LogInStatus = useAppSelector((state: any) => state.loginReducer);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const { i18n, t } = useTranslation();
    const [forLang, SetForLang] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        const value = localStorage.getItem("status");
        if (value === "true") {
            dispatch(dispatch(logIn()));
        } else if (value === "false") {
            dispatch(dispatch(logOut()));
        }
    }, []);

    function changeLanguage(lng: any) {
        i18n.changeLanguage(lng);
        SetForLang(e => !e)

    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseNavMenuMain = () => {
        setAnchorElNav(null);
        return navigate("/AlterEGO")
    };
    const handleCloseNavMenuNews = () => {
        setAnchorElNav(null);
        return navigate("/AlterEGO/news")
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseUserMenuProfile = () => {
        setAnchorElUser(null);
        return navigate("/AlterEGO/profile")
    };

    const handleCloseUserMenuLogOut = () => {
        setAnchorElUser(null);
        localStorage.setItem("status", "false");
        dispatch(logOut());
        return navigate("/AlterEGO")
    };

    return (
        <AppBar position="static" sx={{backgroundColor:'#000000'}} >
            <Container maxWidth="xl" sx={{backgroundColor:'#000000'}}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/AlterEGO"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlterEGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                            <MenuItem onClick={handleCloseNavMenuMain}>
                                <Typography textAlign="center">{t('menu.main')}</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenuNews}>
                                <Typography textAlign="center">{t('menu.news')}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/AlterEGO"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlterEGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenuMain}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('menu.main')}
                        </Button>
                        <Button
                            onClick={handleCloseNavMenuNews}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('menu.news')}
                        </Button>
                    </Box>
                    <Tooltip title={t('menu.lang')}>
                        {forLang ?
                            <IconButton
                                onClick={() => changeLanguage('ua')}
                                size="small"
                                sx={{ ml: 2, color: 'white' }}
                            >
                                <LanguageIcon sx={{ width: 32, height: 32 }} />
                            </IconButton>
                            :
                            <IconButton
                                onClick={() => changeLanguage('en')}
                                size="small"
                                sx={{ ml: 2, color: 'white' }}
                            >
                                <LanguageIcon sx={{ width: 32, height: 32 }} />
                            </IconButton>}
                    </Tooltip>
                    {login.status ?
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}>
                                <MenuItem onClick={handleCloseUserMenuProfile}>
                                    <Typography textAlign="center">{t('menu.profile')}</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenuLogOut}>
                                    <Typography textAlign="center">{t('menu.logout')}</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        :
                        <Button color="inherit" sx={{ width: 68.15, height: 36.5 }} onClick={e => navigate("/AlterEGO/login")}>{t('menu.login')}</Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

