import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = {
  input: [
    { label: 'Equity Share Capital(₹ in Crore)', data: [13772, 13772], years: ['22-23', '23-24'] },
    { label: 'Other Equity(₹ in Crore)', data: [106, 260], years: ['22-23', '23-24'] },
    { label: 'Long-term borrowings(₹ in Crore)', data: [106, 260], years: ['22-23', '23-24'] },
  ],
  output: [
    { label: 'Revenue from Operations(₹ in Crore)', data: [934953, 866345], years: ['22-23', '23-24'] },
    { label: 'Operating Cash Flow(₹ in Crore)', data: [20985, 68097], years: ['22-23', '23-24'] },
    { label: 'Market Capitalisation*(₹ in Crore)', data: [110004, 236884], years: ['22-23', '23-24'] },
    { label: 'PAT(₹ in Crore)', data: [8242, 39619], years: ['22-23', '23-24'] },
    { label: 'EBITDA(₹ in Crore)', data: [28487, 74182], years: ['22-23', '23-24'] },
  ],
  ratio: [
    { label: 'Debt-Equity Ratio (x)', data: [0.98, 0.66], years: ['22-23', '23-24'] },
    { label: 'Return on Assets(%)', data: [1.96, 8.66], years: ['22-23', '23-24'] },
    { label: 'Return on Average Net Worth (%)', data: [7.08, 29.75], years: ['22-23', '23-24'] },
    { label: 'Return on Average Capital Employed (%)', data: [6.19, 20.17], years: ['22-23', '23-24'] },
    { label: 'Interest ServicenCoverage Ratio (Times)', data: [3.39, 9.08], years: ['22-23', '23-24'] },
  ],
};

const Financial = () => {
  const [activeTab, setActiveTab] = useState('input');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderCharts = (dataSets) => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => {
              if (i === dataset.data.length - 1) {
                return 'rgba(209,211,212,1)'; // Last bar color
              } else {
                return 'rgba(250,162,43,1)'; // Default color for other bars
              }
            }),
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(250,162,43,1)',
            hoverBorderColor: 'rgba(250,162,43,1)',
            borderRadius: 10, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 18, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        indexAxis: 'y', // Make bars horizontal
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the x-axis labels
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 120,
            bottom: 120,
            left:20,
            right:70,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 className='text-[#f97316] font-medium' style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='marginal'>
      <h2 className='h2 text-navy my-10 text-3xl font-extrabold text-center text-[#418261]'>Highlights</h2>
      <div className='tabs'>
        <button className={`tab ${activeTab === 'input' ? 'active' : ''}`} onClick={() => handleTabClick('input')}>
          Input
        </button>
        <button className={`tab ${activeTab === 'output' ? 'active' : ''}`} onClick={() => handleTabClick('output')}>
          Output
        </button>
        <button className={`tab ${activeTab === 'ratio' ? 'active' : ''}`} onClick={() => handleTabClick('ratio')}>
          Ratio
        </button>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts(dataSets[activeTab])}
      </Carousel>
    </div>
  );
};

export default Financial;
