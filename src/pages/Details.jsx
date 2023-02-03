import usePostDetails from '../hooks/use-post-details';
import Loading from './../components/Loading';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate= useNavigate();
    const {loading, error, record} =  usePostDetails();
    console.log(record);
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
