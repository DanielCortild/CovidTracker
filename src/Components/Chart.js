import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css';
import numeral from 'numeral';

const options = {
  legend: {
    display: true,
    labels: {

    }
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll"
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          callback: (value, i, values) => numeral(value).format("0a")
        }
      }
    ]
  }
}

const Chart = ({data, colors}) => {
  return (
    <div className="chart">
      {data?.cases?.length ? (
        <Line 
          data={{
            datasets: [
              {
                label: "Cases",
                backgroundColor: "transparent",
                borderColor: colors.cases,
                data: data.cases
              },
              {
                label: "Recovered",
                backgroundColor: "transparent",
                borderColor: colors.recovered,
                data: data.recovered
              },
              {
                label: "Deaths",
                backgroundColor: "transparent",
                borderColor: colors.deaths,
                data: data.deaths
              }
            ]
          }}
          options={options}
        />
      ) : <><br/><center>No historical data available</center></>}
    </div>
  )
}

export default Chart
