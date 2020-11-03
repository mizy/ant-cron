 import React from 'react';
 import ReactDom from 'react-dom';
import Cron from './src/index';
console.log(Cron); 
ReactDom.render(<Cron disableYear={true} defaultActiveKey={"hour"} disableSecond={true} disableMinute={true} />,document.getElementById("app"))