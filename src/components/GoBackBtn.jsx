import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
    const navigate= useNavigate();
    return (
        <div>
            <Button className='mt-3' style={{color:'black'}} 
                variant="link" 
                onClick={()=> navigate("/",{replace:true})}>
                Go Back
            </Button>
        </div>
    );
}

export default GoBackBtn;
