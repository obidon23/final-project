import React from "react";

class UserLoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              </a>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                      type="email" 
                      className="form-control" 
                      id="userEmail" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter email"
                      onChange={this.props.onChange}>
                </input>
              </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>   
                  <input type="text" 
                        placeholder="Enter your password" 
                        id="password"   
                        onChange={this.props.onChange}></input>
                </div>
                <div className="form-group">
                  {/* <button className="btn btn-success" onClick={this.props.userLogin}>User Login</button> */}
                  <button className="btn btn-primary" onClick={this.props.createUser}>Create User</button>
                       
                </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default UserLoginForm;
