import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { insertPost } from "../store/postSlice";



const AddPost = () => {
    const [title, setTitle]=useState("");
    const [author, setAuthor]= useState("");
    
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const {loading, error}= useSelector(state=>state.posts);

    const formHandler= (e)=>{
        e.preventDefault();
        const id=Math.floor(Math.random()*500);
        dispatch(insertPost({id,title, author})).unwrap().then(()=>{
            navigate("/")
        }).catch(error=>{console.log(error);});
    };
    return (
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
        </Form>
    );
}

export default AddPost;
