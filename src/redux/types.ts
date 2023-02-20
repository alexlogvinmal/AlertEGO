export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export enum PostActionTypes {
  FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
}
