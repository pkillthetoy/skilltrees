import React, { Component } from 'react';
import { connect } from 'react-redux'
import DowntimeDisplay from './downtime_display/downtime_display.js';
import './App.css';

const AppLayout = () => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Skill trees make my dick rock hard</h2>
        </div>
        <div className="App-sidebar">
        </div>
        <div className="App-mainbody">
          <DowntimeDisplay />
        </div>
      </div>
    );

}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppLayout)
export default App;
