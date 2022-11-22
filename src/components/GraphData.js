import React, { useEffect, useState } from 'react';
import Data from '../data.json';
import { Bar } from 'react-chartjs-2';
import './ExpensesTrack.css';
import { Chart as ChartJS } from 'chart.js/auto';

const GraphData = () => {
  const dayAmount = Data.map((data) => data.amount);


let options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: 'Spending- Last 7 days',
        data: Data.map((data) => data.amount),
        backgroundColor: '#ec755d',
        hoverBackgroundColor: '#76b5bc',
        tooltips: {
          enabled: false,
        },
      },
    ],
  });

  const totalAmount = (arr) => {
    var total = arr?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log('total', total);
    return total;
  };

  useEffect(() => {
    totalAmount(dayAmount);
  }, [dayAmount]);


  return (
    <div className='graph-background'>
      <h3 className='spending-title'> Spending - Last 7 days</h3>
      <Bar data={userData} options={options} />
      <div className='footer'>
        <div className='first-sec'>
          <h6 className='total-title'> Total this month</h6>
          <br />
          <span className='total-price'> $ {totalAmount(dayAmount)} </span>
        </div>
        <div className='secondsec'>
          <span className='total-percent'> +2.4%</span>
          <br />
          <h6 className='total-title'> from last month</h6>
        </div>
      </div>
    </div>
  );
};

export default GraphData;
