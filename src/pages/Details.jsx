import usePostDetails from '../hooks/use-post-details';
import Loading from './../components/Loading';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cleanRecord } from '../store/postSlice';

const Details = () => {
    const navigate= useNavigate();
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
                <Button variant="link" onClick={()=> navigate("/",{replace:true})}>Go Back</Button>
            </>
        </Loading>
    );
}

export default Details;
