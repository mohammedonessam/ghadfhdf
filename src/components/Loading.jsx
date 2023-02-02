import { cloneElement } from "react";

const Loading = ({loading, error, children}) => {
  return (
    <>
      { loading ? (
        <p colSpan={4}>loading please wait....</p>
      ) : error ? (
        <p colSpan={4}>{error}</p>
      ) : (
       children
      )}  
    </>
  );
}

export default Loading;
