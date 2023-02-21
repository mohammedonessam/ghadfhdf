import usePostDetails from '../hooks/use-post-details';
import Loading from './../components/Loading';
import { Form, Button } from "react-bootstrap";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanRecord, editPost } from '../store/postSlice';
import GoBackBtn from './../components/GoBackBtn';
import WithGaurd from './../utl/withGaurd';
import { useFormik } from "formik";
import { formSchema } from '../utl/validationSchema';

const Edit = () => {
    const {loading, error, record} =  usePostDetails();
    

    const navigate = useNavigate();
    const dispatch= useDispatch();


    useEffect(()=>{
        return ()=>{
            dispatch(cleanRecord());
        };
    },[dispatch]);



    const formik = useFormik({
        initialValues: {
          title: record? record?.title: "",
          author: record? record?.author: "",
        },
        enableReinitialize: true,
        validationSchema: formSchema,
        onSubmit: values => {
            dispatch(editPost({id : record.id, title:values.title, author: values.author})).unwrap().then(()=>{
                navigate("/")
            }).catch(error=>{console.log(error);});
        },
      });

    return (
        <Loading>
             <Form onSubmit={formik.handleSubmit}>
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
                    <Button variant="primary" type="submit">Submit</Button>
                </Loading>
                <GoBackBtn/>
            </Form>
        </Loading>
    );
}

export default WithGaurd(Edit);
