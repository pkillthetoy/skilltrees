import React, { Component }from 'react';
import { connect } from 'react-redux';
import SkillColumn from './skill_column/skill_column.js';
import {Tabs, Tab, Accordion, Panel, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './downtime_display.css';

const DowntimeLayout = ({selectedSkill}) => (
  <Tabs id="tabs">
    <Tab eventKey={1} title="Roald">
      <div className="tab-container">
        <div className="left-column">
          <SkillColumn charName="Roald" />
        </div>
        <div className="middle-column">
          Badge listing and equips go here - equipped on top, unequipped
          on bottom.
        </div>
        <div className="right-column">
          Individual skill display info goes here.
          <div>{selectedSkill}</div>
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
    selectedSkill: state.selectedSkill
  }
}

const DowntimeDisplay = connect(downtimeStateToProps, downtimeDispatchToProps)(DowntimeLayout)

export default DowntimeDisplay
