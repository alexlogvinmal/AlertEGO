import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Post, PostState } from '../redux/types';
import { fetchPosts } from '../redux/actions';
import { useAppDispatch } from '../redux/hook';

export function News() {

    const postState: PostState = useSelector((state: any) => state);
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
            return <div>Loading...</div>;
        }
        if (postState.error) {
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
    {loadbttn ? <button onClick={e=> setLoadto(loadto+10)}>Load More</button> : <p>All Post Loaded</p>}
    </>
    )
};


