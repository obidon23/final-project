// Include the Main React Dependencies
import React from "react";

// Include the main Child Components
import UserLoginForm from "./UserLoginForm";

import axios from "axios";

// construct User Login components

class UserLogin extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.createUser = this.createUser.bind(this);
        this.state = {
            userEmail: '',
            password: '',
        }
        console.log(axios);
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
    }
    
    createUser() {
        axios.post("http://localhost:8081/addUser", {
            username: this.state.userEmail,
            password: this.state.password
    })
        .then(function (response) {
            console.log("user added");
            this.setState = {
                userEmail: '',
                password: '',
            }
        })
        .catch(function (error) {
            console.log(error);
        });   
        }
    render() {
        return(
        <div>
        
            <UserLoginForm 
                createUser={this.createUser} 
                onChange={this.onChange}
            />
            
        </div>
        );
    } 

}
export default UserLogin;