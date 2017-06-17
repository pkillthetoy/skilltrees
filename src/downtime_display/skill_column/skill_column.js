import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Panel, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './skill_column.css';
import {SKILLS, CHARACTERS} from '../../characters.js';

const SkillColumnLayout = ({charName}) => {
        var charObject = CHARACTERS[charName]

        return <div>
          <div>{charObject.name}</div>
          <div>Level 1 HP 10 Attack 1</div>
          {charObject.levels.map((level, index) =>{
            if (level.length == 1) {
              return <img className="skill-large-icon"
                src={SKILLS[level[0]].image} draggable="false"
              />
            }
            // Otherwise, 2 skills in the level.
              return <div className="take-space" key={index}>
                <img className="skill-large-icon"
                  src={SKILLS[level[0]].image} draggable="false"
                />
                <div className="vertical-center">Text</div>
                <img className="skill-large-icon"
                  src={SKILLS[level[1]].image} draggable="false"
                />
              </div>
          })}
        </div>

}

const skillColumnDispatchToProps = (dispatch) => {
  return {}
}
const skillColumnStateToProps = (state) => {
  return {
  }
}

const SkillColumn = connect(skillColumnStateToProps, skillColumnDispatchToProps)(SkillColumnLayout)

export default SkillColumn
