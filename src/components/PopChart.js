import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import jsonData  from '../data/Data';

class PopChart extends Component {
  state = {
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [], // Will be filled with country names
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Number of Visitors per Country',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },
    series: [
      {
        name: 'Number of Visitors',
        data: [], // Will be filled with visitor counts
      },
    ],
  };

  componentDidMount() {
    

    // Process the JSON data to count visitors per country
    const visitorCounts = {};
    jsonData.forEach((entry) => {
      const country = entry.country;
      if (country) {
        if (visitorCounts[country]) {
          visitorCounts[country]++;
        } else {
          visitorCounts[country] = 1;
        }
      }
    });

    // Extract country names and visitor counts for chart rendering
    const categories = Object.keys(visitorCounts);
    const data = Object.values(visitorCounts);

    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: categories,
        },
      },
      series: [
        {
          name: 'Number of Visitors',
          data: data,
        },
      ],
    });
  }

  render() {
    return <Chart options={this.state.options} series={this.state.series} type="bar" />;
  }
}

export default PopChart;
