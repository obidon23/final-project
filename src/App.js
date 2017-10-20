import React, { Component } from 'react';
import './App.css';
import SessionInfo from './components/SessionInfo';
import GetSessions from './components/getSessions';
import UserLogin from './components/UserLogin';
import AddReport from './components/addReport';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="header col-sm-12">
            <h1 className="h1 h1-default"> Welcome to the Lassie Tracker</h1>
            <div className="">

            </div>
          </div>
        </div>
        <SessionInfo />
        <GetSessions />
        <UserLogin />
        <AddReport />
      </div>
    );
  }
}

export default App;
