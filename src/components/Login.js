import React, { Component } from 'react'
import Input from './commons/Input';
import Button from './commons/Button';
import axios from 'axios';
import Switching from './Switching';
import  { Redirect } from 'react-router-dom'


class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
        newUser : {
            username : '',
            password : ''
        },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
        return { 
            newUser : {
                    ...prevState.newUser, [name]: value
                    }
        }
        }, () => console.log("ini"+this.state.newUser)
        )
    }

    handleUsername(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, username: value
            }
        }))
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, password: value
            }
        })) 
    }

    handleClearForm(e) {
       e.preventDefault();
            this.setState({
                newUser: {
                    username: '',
                    password:''
                }
            })
        
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userDataInput = this.state.newUser.username;
        let passDataInput = this.state.newUser.password;
        // console.log("MASUK " + JSON.stringify(userDataInput));
    
        axios.get('http://localhost:3001/user')
        .then((response => {
            // console.log("data" +JSON.stringify(response.data));
            const data = response.data.values;
            if (data.length >= 1) {
                //    console.log("sukses");
                for (let index = 0; index < response.data.values.length; index++) {
                        // console.log("rendernya: "+JSON.stringify(data));
                        const UserName = data[index].username.toLowerCase();
                        const Password = data[index].pass.toLowerCase();
                        // console.log("userDataInput"+userDataInput);
                        // console.log("UserName"+UserName);
                        // console.log("Password" + Password);
                        if (UserName === userDataInput && Password === passDataInput) {
                            // alert("ITS MATCH !");
                            this.setState ({isLoggedIn: true});
                            console.log("masuk redirect");
                            return true
                            // return <Redirect to='/switching'  />
                            // console.log(this.state.isLoggedIn);
                        }else{
                            return alert("User Not Found");
                            // return false;
                        }
                    }
                }
                else{
                    return false;
                }
            })
        );
    }

  render() {
    // const object = this.state.newUser;
    if (this.state.isLoggedIn === true) {
        console.log("switch");
        return <Switching />;
    } else {
        return (
                <div class="row">
                    <div class="col-lg-12 text-center wrapper-login-header">
                        <h1>Login</h1>
                    </div>
                    <div class="col-lg-12 text-center wrapper-login">
                        <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <div className="form-group">
                                    <Input type={'text'}
                                        name= {'username'}
                                        value={this.state.newUser.username} 
                                        placeholder = {'username'}
                                        handleChange = {this.handleUsername}
                                        />
                                </div>
                                <div className="form-group">
                                    <Input 
                                        type={'password'}
                                        name= {'password'}
                                        value={this.state.newUser.password} 
                                        placeholder = {'password'}
                                        handleChange = {this.handlePassword}
                                        />
                                </div>
                                
                                <div className="form-group">
                                    <Button
                                        type = {'primary'} 
                                        title = {'Submit'} 
                                        />
                                        
                                    <Button class="btn btn-danger"
                                        action = {this.handleClearForm}
                                        style = {buttonStyle}
                                        type = {'secondary'}
                                        title = {'Clear'}
                                        />
                                </div>
                                
                            </div>
                        </form> 
                    </div>
                    
                </div>
                
                
          );
    }

    // console.log("render"+ JSON.stringify(object));
    
  }
}

const buttonStyle = {
    margin : '10px'
  }
export default Login
