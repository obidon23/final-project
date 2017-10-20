import React from "react";

class ClientForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">

        </div>
            <div className="card-title">
                <h3>
                    Add a New Client
                </h3>
            </div>

        <div id="card-text">
            <div className="form-group">
                <label htmlFor="clientName">Client Name</label>
                <input type="input" 
                    placeholder="Enter a name" 
                    id="clientName" 
                    onChange={this.props.onChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="clientEmail">Client Email</label>
                <input type="email" 
                    placeholder="Enter a valid email address" 
                    id="sessionDate" 
                    onChange={this.props.onChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="clientHomePhone">Client Home Phone</label>
                <input type="input" 
                    placeholder="Enter a phone number" 
                    id="clientHomePhone" 
                    onChange={this.props.onChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="clientCellPhone">Client Cell Phone</label>
                <input type="input" 
                    placeholder="Enter a phone number" 
                    id="clientCellPhone" 
                    onChange={this.props.onChange}></input>
            </div>

            <div className="form-group">
                <button className="btn btn-success" onClick={this.props.createClient}>Create Client</button>     
            </div>
        </div>
        
      </div>
    )
  }
}

export default ClientForm;
