import React from "react";

const Loading = ({loading, error, children}) => {
  let elementType=children.type.render.displayName;

  const renderHandler = ()=>{
    if (elementType === "Button") {
      const cloneButton= React.cloneElement(children, {disabled: true},"loading...");
      return (
        <>
          { loading ? (
            cloneButton
          ) : error ? (
            <>
            {children}
            
            <p colSpan={4}> <br/> {error}</p>
            </>
          ) : (
           children
          )}  
        </>
      );
    }
    return (
      <>
        { loading ? (
          <p colSpan={4}>loading please wait...</p>
        ) : error ? (
          <p colSpan={4}>{error}</p>
        ) : (
         children
        )}  
      </>
    );
  };
  return renderHandler();
}

export default Loading;
