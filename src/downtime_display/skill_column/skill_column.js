import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Panel, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './skill_column.css';

const SkillColumnLayout = ({charName}) => (
        <div>
          <div>{charName}</div>
          <div>Level 1 HP 10 Attack 1</div>
          <img className="skill-large-icon"
            src={ require("../../images/logo.svg")} draggable="false"
          />
          <div className="take-space">
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
            <div className="vertical-center">Text</div>
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
          </div>
          <div className="take-space">
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
            <div className="vertical-center">Text</div>
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
          </div>
          <div className="take-space">
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
            <div className="vertical-center">Text</div>
            <img className="skill-large-icon"
              src={ require("../../images/logo.svg")} draggable="false"
            />
          </div>
        </div>

)

const skillColumnDispatchToProps = (dispatch) => {
  return {}
}
const skillColumnStateToProps = (state) => {
  return {
  }
}

const SkillColumn = connect(skillColumnStateToProps, skillColumnDispatchToProps)(SkillColumnLayout)

export default SkillColumn
