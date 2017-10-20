import React from "react";

class Lassieform extends React.Component {
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
                <h5 className="animated rubberBand">LASSIE Session Report </h5>
              </a>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                <div className="form-group">
                  <label htmlFor="sessionDate">Session Date</label>
                  <input type="date" 
                        placeholder="Pick a date" 
                        id="sessionDate" 
                        onChange={this.props.onChange}></input>
                </div>

                <div className="form-group">
                  <label htmlFor="sessionLocation">Session Location</label>   
                  <input type="text" 
                        placeholder="Where did you meet for this session?" 
                        id="sessionLocation"   
                        onChange={this.props.onChange}></input>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" onClick={this.props.addReport}>Submit Report</button>     
                </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                LISTEN
              </a>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              Questions about the LISTEN portion of LASSIE (primary connection: head/heart/hands, what I learned, what don't I know)
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ASK
              </a>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              Questions about the ASK portion of LASSIE (primary connection: head/heart/hands, what I learned, what don't I know)
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lassieform;
