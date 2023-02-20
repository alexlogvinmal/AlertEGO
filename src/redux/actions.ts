import { Dispatch } from 'redux';
import { PostActionTypes } from './types';
import axios from 'axios'

export const fetchPostsRequest = () => ({
  type: PostActionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (data: any) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailure = (error: string) => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await response.data;
      dispatch(fetchPostsSuccess(data));
    } catch (error:any) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
