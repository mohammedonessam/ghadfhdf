import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostListItems = ({data, deleteRecord}) => {
    const deleteHandler=(item)=>{
        if(window.confirm(`Do You want To Delete Record: ${item.title}`)){
            deleteRecord(item.id);
        }
    };
    const records = data.map((el,idx)=>{
       return(
            <tr key={el.id}>
                <th>#{++idx}</th>
                <th>
                    <Link style={{color:'black'}} to={`post/${el.id}`}>
                        {el.title}
                    </Link>
                </th>
                <th>{el.author}</th>
                <th>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success">Edit</Button>
                    <Button onClick={()=>deleteHandler(el)}  variant="danger">Delete</Button>
                </ButtonGroup>
                </th>
            </tr>
        )
    });

    return  <>{records}</>;
};

export default PostListItems;
