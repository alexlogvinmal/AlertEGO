import { useEffect, useState } from 'react';
import { Post, PostState } from '../redux/types';
import { fetchPosts } from '../redux/news/actions';
import { useAppDispatch, useAppSelector } from '../redux/hook';

export function News() {

    const postState: PostState = useAppSelector((state: any) => state.postReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const [delid, setDelid] = useState(0);
    const [loadto, setLoadto] = useState(10);
    let loadbttn = true;

    postState.posts = postState.posts.filter(post => post.id != delid);
    const newdata = postState.posts.slice(0,loadto);

    if(newdata.length == postState.posts.length){
        loadbttn =false
    }
    
    const renderPosts = () => {
        if (postState.loading) {
            loadbttn =false;
            return <div>Loading...</div>;
        }
        if (postState.error) {
            loadbttn =false;
            return <div>{postState.error}</div>;
        }
        return newdata.map((post: Post) => (
            <div key={post.id}>
                <button onClick={e => setDelid(post.id)}>DELETE</button>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
    } 

    return (
    <>
    <div className='1'>{renderPosts()}</div>
    {loadbttn ? <button onClick={e=> setLoadto(loadto+10)}>Load More</button> : <></>}
    </>
    )
};


