import React, { useState } from 'react';
import { credentialConstant } from '../../constants/constant';
import { useDispatch} from 'react-redux';

function LoginComponent(props) {
    // const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    const [ credential, setCredential ] = useState({username : '', password : ''})

    const loginActionCall = () => {
        return {
            type : 'ISLOGGEDIN'
        }
    }

   const  onSubmitClick = (event) => {
    // event.preventDefault();
        if(credential.username === credentialConstant.username && credential.password === credentialConstant.password) {
            // return <h1>Heiiiii</h1>
            // localStorage.setItem('isLogIn', true);
            dispatch(loginActionCall());
            props.history.push('/home');
        } else {
            // alert ('Wrong Credintilas..!!');
        }
        
    }

    return (
        <form onSubmit = {onSubmitClick()} > 
            <input type = "text" placeholder = "Username" onChange = {e => setCredential({...credential, username : e.target.value})}  value = {credential.username} />
            <input type = "password" placeholder = "Password" onChange = {e => setCredential({...credential, password : e.target.value})} value = {credential.password} />
            <button type= "submit" >Login</button>
        </form>
    )
} 

export default LoginComponent;