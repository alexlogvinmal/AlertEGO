import { useTranslation } from 'react-i18next';

export default function Main() {

  const { t } = useTranslation();

  return (<><h1>{t('menu.main')}</h1><h2><i>{t('menu.main-text')}</i></h2></>) 
};

