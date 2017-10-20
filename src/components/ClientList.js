// Include the Main React Dependencies
import React from "react";

// construct Main components

class ClientList extends React.Component {  

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="card">
            <div className="card-title">
                List of Clients
            </div>    
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Client 1</li>
                <li className="list-group-item">Client 2</li>                
                <li className="list-group-item">Client 3</li>            
            </ul>

            <button onClick={this.props.getSessions} className="btn btn-warning">Get Sessions</button>
        </div>
    )
  }
}
export default ClientList;