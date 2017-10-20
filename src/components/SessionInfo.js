// Include the Main React Dependencies
import React from "react";
import axios from "axios";

// construct Main components

class SessionInfo extends React.Component {  

  render() {
;
    return (
        <div className="card">
          <div className="card-title">
            {this.props.header}
          </div>
          <ul className="list-group list-group-flush">
            <li>{this.props.sessions}</li>
          </ul>
        </div>
      
    )
  }
}
export default SessionInfo;