import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

export default function NotFound() {

    const { t } = useTranslation();

    return (
    <Box sx={{ fontFamily: ' -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:'40rem' }}>
    <h1>404 | </h1>
    <p>{t('menu.404')}</p>
    </Box>
    ) 
  };
  