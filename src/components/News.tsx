import { useEffect, useState } from 'react';
import { Post, PostState } from '../redux/types';
import { fetchPosts } from '../redux/news/actions';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';


export default function News() {

    const postState: PostState = useAppSelector((state: any) => state.postReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const { t } = useTranslation();

    const [delid, setDelid] = useState(0);
    const [loadto, setLoadto] = useState(10);
    let loadbttn = true;

    postState.posts = postState.posts.filter(post => post.id != delid); // Видалення вибраної новини
    const newdata = postState.posts.slice(0, loadto); // Кількість новин які будуть відображені на сторінці

    if (newdata.length == postState.posts.length) { // Якщо всі новини зі списку вже відображені на сторінці кнопка "Завантажити ще" зникає
        loadbttn = false
    }

    const Item = styled(Paper)(({ theme }) => ({ // Кастомізація блоку новини
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const Divforbtnn = styled(Paper)(({ theme }) => ({ // Кастомізація блоку видалення новини, розміщення його праворуч
        textAlign: 'right',
        boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)'
    }));

    const renderPosts = () => {
        if (postState.loading) { // Якщо новини в ще в статусі завантаження, відобразити на сторінці елемент завантаження і не показувати кнопку "Завантажити ще" 
            loadbttn = false; 
            return  <p><CircularProgress color="inherit"/></p>;
        }
        if (postState.error) { // Якщо при отриманні новин виникла помилка, відобразити на сторінці помилку і не показувати кнопку "Завантажити ще" 
            loadbttn = false;
            return <p>{postState.error}</p>;
        }
        // Якщо новини отриманні, відобразити на сторінці блок новин
        return newdata.map((post: Post) => (
            <Item key={post.id}>
                <Divforbtnn>
                    <Tooltip title={t('menu.delete')}>
                        <IconButton
                            onClick={() => setDelid(post.id)}
                            size="small"
                            sx={{ ml: 2 }}>
                            <ClearIcon sx={{ width: 32, height: 32 }} />
                        </IconButton>
                    </Tooltip>
                </Divforbtnn>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </Item>
        ))
    }

    return (
        <>
            <Stack spacing={2}>{renderPosts()}</Stack>
            {loadbttn ?
                <Tooltip title={t('menu.loadmore')}>
                    <IconButton
                        onClick={e => setLoadto(loadto + 10)}
                        size="small"
                        sx={{ ml: 2 }}>
                        <RefreshIcon sx={{ width: 32, height: 32, marginTop: '1rem', marginBottom: '1rem' }} />
                    </IconButton>
                </Tooltip> : <></>}
        </>
    )
};


