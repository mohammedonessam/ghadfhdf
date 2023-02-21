import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import GoBackBtn from "../components/GoBackBtn";
import Loading from "../components/Loading";
import { insertPost } from "../store/postSlice";
import WithGaurd from "../utl/withGaurd";
import { useFormik } from "formik";
import { formSchema } from "../utl/validationSchema";



const AddPost = () => {
    
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const {loading, error}= useSelector(state=>state.posts);

    const formik = useFormik({
        initialValues: {
          title: '',
          author: '',
        },
        validationSchema: formSchema,
        onSubmit: values => {
            const id=Math.floor(Math.random()*500);
            dispatch(insertPost({id,title:values.title, author:values.author})).unwrap().then(()=>{
                navigate("/")
            }).catch(error=>{console.log(error);});
        },
      });
      
    return (
        <Form  onSubmit={formik.handleSubmit} >
            <Form.Group className="mb-3"controlId="exampleForm.ControlInput1" >
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    isInvalid={!!formik.errors.title && formik.values.title}
                    isValid={!formik.errors.title && formik.values.title }
                />
                    {!!formik.errors.title 
                    ?(<Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>)
                    :!formik.errors.title && formik.values.title
                    ?(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>):null}
                    
            </Form.Group>
            <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    type="text"
                    name="author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                    isInvalid={!!formik.errors.author && formik.values.author}
                    isValid={!formik.errors.author && formik.values.author }
                />
                {!!formik.errors.author
                    ?(<Form.Control.Feedback type="invalid">{formik.errors.author}</Form.Control.Feedback>)
                    :!formik.errors.author && formik.values.author
                    ?(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>):null}
            </Form.Group>
            <Loading loading={loading} error={error}>
                <Button  variant="primary" type="submit">Submit</Button>
            </Loading>
            <GoBackBtn/>
        </Form>
    );
}

export default WithGaurd(AddPost);
