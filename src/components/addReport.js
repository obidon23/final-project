// Include the Main React Dependencies
import React from "react";

// Include the main Child Components
import Lassieform from "./Lassieform";

import axios from "axios";

// construct Main components

class AddReport extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.addReport = this.addReport.bind(this);
        this.state = {
            sessionDate: '',
            sessionLocation: '',
        }
        console.log(axios);
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
    }

    addReport() {
        axios.post("http://localhost:8081/addSession", {
            sessionDate: this.state.sessionDate,
            sessionLocation: this.state.sessionLocation
    })
        .then(function (response) {
            console.log("anything");
            this.setState = {
                sessionDate: '',
                sessionLocation: '',
            }
        })
        .catch(function (error) {
            console.log(error);
        });   
        }
    render() {
        return(
        <div>
            <div className="jumbotron">
                <h2 className="animated jello">Submit your LASSIE Report</h2>
            </div>
        
            <Lassieform 
                addReport={this.addReport} 
                onChange={this.onChange}
            />
            
        </div>
        );
    } 

}
export default AddReport;