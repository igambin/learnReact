import React from 'react';
import classes from './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props) => {

  const dpValues = props.dataPoints.map(dp => dp.value);
  const maxValue = Math.max(...dpValues);

  return (
    <div className={classes.Chart}>
      {props.dataPoints.map( dataPoint =>
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          />
        )
      }
    </div>
  );
};

export default Chart;