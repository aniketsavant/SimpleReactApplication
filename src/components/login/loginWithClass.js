import React, { Component } from 'react';
import { credentialConstant } from '../../constants/constant';

class LoginWithClassComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            username : '',
            password : ''
        };

        this.setUsername = this.setUsername.bind();
        this.setPassword = this.setPassword.bind();
        this.onSubmitClick = this.onSubmitClick.bind();
    }

    setUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    setPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmitClick(e) {
        e.preventDefault();
        if(this.state.username === credentialConstant.username && this.state.password === credentialConstant.password) {
            localStorage.setItem('isLogIn', true);
            this.props.history.push('/home');
        } else {
            alert ('Wrong Credintilas..!!');
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit = {this.onSubmitClick} > 
                    <input type = "text" id = 'username' placeholder = "Username" onChange = {this.setUsername}  value = {this.state.username} />
                    <input type = "password" id = 'password' placeholder = "Password" onChange = {this.setPassword} value = {this.state.password} />
                    <button type= "submit" >Login</button>
                </form>
            </React.Fragment>
        )
    }
}

export default LoginWithClassComponent;