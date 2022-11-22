import React from 'react';
import './ExpensesTrack.css';
import logo from '../assests/logo.svg';
import GraphData from './GraphData';

const ExpensesTrack = () => {
  return (
    <div className='main-background'>
      <div className='orange-background'>
        <div className='graph-header'>
          <div className='balance-number'>
            <span class='balance-text'>My balance</span>
            <br />
            <span class='total-amount'> $921.48</span>
          </div>
          <div className='icon-div'>
            <img src={logo} alt='icon' />
          </div>
        </div>
        <div className='graph-data'>
          <GraphData />
        </div>
      </div>
    </div>
  );
};

export default ExpensesTrack;
