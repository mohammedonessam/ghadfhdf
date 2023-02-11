import {useEffect} from 'react';
import PostList from '../components/PostList';
import {useDispatch,useSelector} from "react-redux";
import {fetchPosts, deletePost} from "../store/postSlice";
import { useCallback } from 'react';
import Loading from './../components/Loading';

const Index = () => {
    const dispatch = useDispatch();
    const {records, loading, error} = useSelector((state) =>state.posts);
    const {isLoggedIn}= useSelector(state=> state.auth);

    useEffect(()=>{
        dispatch(fetchPosts());
        },[dispatch]
    );

    const deleteRecord= useCallback(
        (id)=> dispatch(deletePost(id)),
        [dispatch]
    );
    return (
        <Loading loading={loading} error={error}>
            <PostList deleteRecord={deleteRecord} data={records} isLoggedIn={isLoggedIn}/>
        </Loading>
    )
};
export default Index;
