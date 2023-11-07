import React from 'react';
import ApexCharts from 'react-apexcharts';
import data from '../data/Data';

const Sparklines = (props) => {

  const {
    startDay,
    startMonth,
    startYear,
    endDay,
    endMonth,
    endYear,
  } = props;

  // console.log(startDay);


  const filteredData = data.filter((entry) => {
    const arrivalDate = new Date(
      entry.arrival_date_year,
      new Date(Date.parse(entry.arrival_date_month + " 1, 2000")).getMonth(),
      entry.arrival_date_day_of_month
    );
    const startDate = new Date(startYear, new Date(Date.parse(startMonth + " 1, 2000")).getMonth(), startDay);
    const endDate = new Date(endYear, new Date(Date.parse(endMonth + " 1, 2000")).getMonth(), endDay);
    return arrivalDate >= startDate && arrivalDate <= endDate;
  });

  // Extract and transform the filtered data for sparklines
  const sparklineData = filteredData.map((entry) => ({
    date: `${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`,
    adults: entry.adults,
    children: entry.children,
    babies: entry.babies,
  }));

  const adultsData = sparklineData.map(entry => entry.adults);
  const childrenData = sparklineData.map(entry => entry.children);
  const babiesData = sparklineData.map(entry => entry.babies);
  const dates = sparklineData.map(entry => entry.date);

  const sparklineOptions = [
    {
      series: [{ data: adultsData }],
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        categories: dates,
      },
      yaxis: {
        min: 0,
      },
      colors: ['#007bff'],
      title: {
        text: 'Adult Visitors',
        offsetX: 0,
        style: {
          fontSize: '14px',
        },
      },
    },
    {
      series: [{ data: childrenData }],
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        categories: dates,
      },
      yaxis: {
        min: 0,
      },
      colors: ['#28a745'],
      title: {
        text: 'Children Visitors',
        offsetX: 0,
        style: {
          fontSize: '14px',
        },
      },
    },
    {
      series: [{ data: babiesData }],
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        categories: dates,
      },
      yaxis: {
        min: 0,
      },
      colors: ['#ffc107'],
      title: {
        text: 'Babies Visitors',
        offsetX: 0,
        style: {
          fontSize: '14px',
        },
      },
    },
  ];

  return (
    <div>
      {sparklineOptions.map((options, index) => (
        <ApexCharts
          key={index}
          options={options}
          series={options.series}
          type={options.chart.type}
          width="100%"
          height={options.chart.height}
        />
      ))}
    </div>
  );
};

export default Sparklines;
