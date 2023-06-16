import React from 'react';
import classes from './ChartBar.css';

const ChartBar = (props) => {

  let fillHeight = '0%';

  if(props.maxValue > 0) {
    fillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={classes.ChartBar}>
      <div className={classes.ChartBarInner}>
        <div className={classes.ChartBarFill} style={{height: fillHeight}}>
        </div>
      </div>
      <div className={classes.ChartBarLabel}>
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;