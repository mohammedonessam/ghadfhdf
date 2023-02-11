import usePostDetails from '../hooks/use-post-details';
import Loading from './../components/Loading';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cleanRecord } from '../store/postSlice';
import GoBackBtn from '../components/GoBackBtn';

const Details = () => {
    const dispatch= useDispatch();

    const {loading, error, record} =  usePostDetails();

    useEffect(()=>{
        return ()=>{
            dispatch(cleanRecord());
        };
    },[dispatch]);

    return (
        <Loading loading={loading} error={error}>
            <>
                <h1> Details Of Record {record?.id}</h1>
                <p>Title: {record?.title}</p>
                <p>Author: {record?.author}</p>
                <GoBackBtn/>
            </>
        </Loading>
    );
}

export default Details;
