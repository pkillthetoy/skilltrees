import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab, Accordion, Panel, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './downtime_display.css';

const DowntimeLayout = ({}) => (
  <Tabs id="tabs">
    <Tab eventKey={1} title="Battle">
      <div className="tab-container">
        <div className="left-column">
          Character name, info, unique tree goes here.
        </div>
      </div>
    </Tab>
    <Tab eventKey={2} title="Alchemy">
      <div className="skill-tab-container">
      </div>
    </Tab>
    <Tab eventKey={3} title="Meditation">
    </Tab>
    <Tab eventKey={4} title="Passive">
    </Tab>
  </Tabs>
)

const downtimeDispatchToProps = (dispatch) => {
  return {}
}
const downtimeStateToProps = (state) => {
  return {
  }
}

const DowntimeDisplay = connect(downtimeStateToProps, downtimeDispatchToProps)(DowntimeLayout)

export default DowntimeDisplay
