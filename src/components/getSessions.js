// Include the Main React Dependencies
import React from "react";
import SessionInfo from './SessionInfo';
import ClientList from './ClientList';
import axios from "axios";

// construct Main components

class GetSessions extends React.Component {  
    
    constructor(props) {
        super(props);
        this.getSessions = this.getSessions.bind(this);
        this.state = {
            sessions: []
        }
    }    

    getSessions() {
        console.log("getting sessions from firebase");
        var self = this;
        axios.get("http://localhost:8081/test")
        .then(function (response) {
            var sessions = [];
            Object.keys(response.data).forEach(function(key) {
                var val = response.data[key];
                sessions.push(val);
              });
              self.setState({sessions: sessions});

        })
        .catch(function (error) {
            console.log(error);
        })   
    
    }   

    render() {     
        return(
        <div>
        
            <ClientList 
                getSessions={this.getSessions}
            />

            <SessionInfo
                header={"This is the header"}
                sessions={this.state.sessions}
            />
            
        </div>
        );
    } 
}
export default GetSessions;