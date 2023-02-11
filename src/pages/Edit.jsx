import usePostDetails from '../hooks/use-post-details';
import Loading from './../components/Loading';
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanRecord, editPost } from '../store/postSlice';
import GoBackBtn from './../components/GoBackBtn';
import WithGaurd from './../utl/withGaurd';


const Edit = () => {
    const {loading, error, record} =  usePostDetails();
    const [title, setTitle]=useState("");
    const [author, setAuthor]= useState("");
    console.log(record);

    const navigate = useNavigate();
    const dispatch= useDispatch();

    useEffect(()=>{
        if (record && !title && !author) {
            setTitle(record.title);
            setAuthor(record.author);
        }
    },[record]);

    useEffect(()=>{
        return ()=>{
            dispatch(cleanRecord());
        };
    },[dispatch]);

    

    const formHandler= (e)=>{
        e.preventDefault();
        dispatch(editPost({id : record.id, title, author})).unwrap().then(()=>{
            navigate("/")
        }).catch(error=>{console.log(error);});
    };
    return (
        <Loading>
             <Form onSubmit={formHandler}>
                <Form.Group className="mb-3"controlId="exampleForm.ControlInput1" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={author} 
                        onChange={(e)=>setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Loading loading={loading} error={error}>
                    <Button variant="primary" type="submit">Submit</Button>
                </Loading>
                <GoBackBtn/>
            </Form>
        </Loading>
    );
}

export default WithGaurd(Edit);
