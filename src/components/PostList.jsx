import { Table } from "react-bootstrap";
import PostListItems from "./PostListItems";
import { memo } from 'react';

const PostList = ({data, deleteRecord}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "40%" }}>Title</th>
          <th style={{ width: "20%" }}>Author</th>
          <th style={{ width: "20%" }}></th>
        </tr>
      </thead>
      <tbody>
          <PostListItems data={data} deleteRecord={deleteRecord}/>
      </tbody>
    </Table>
  );
};
export default memo(PostList);
