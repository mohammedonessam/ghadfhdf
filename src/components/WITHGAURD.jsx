import {Children, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WITHGAURD = ({children}) => {
    const {isLoggedIn}=useSelector((state)=>state.auth)
    
    return (
       isLoggedIn? children: <div>please log in first</div>
    );
}

export default WITHGAURD;
