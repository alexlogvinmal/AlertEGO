import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {

    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10rem',
            color: 'white',
            backgroundColor: 'black'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Link href="/" underline="none" color="white">{t('menu.main')}</Link>
                    <Link href="/news" underline="none" color="white">{t('menu.news')}</Link>
                </Box>
                <Link href="https://github.com/alexlogvinmal" underline="none" color="white" target="_blank">My GitHub</Link>
            </Box>
            <p>AlterEGO technical task</p>
        </Box>
    )
};
