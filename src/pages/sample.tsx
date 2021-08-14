import React from 'react';
import { Header } from '../components/header';
import RadarChart from 'react-svg-radar-chart';
import ReactApexChart from 'react-apexcharts';
import 'react-svg-radar-chart/build/css/index.css'

export const Sample = () =>{
  const data = [
    {
      data: {
        성실: 0.7,
        책임: .8,
        소통: 0.9,
        근면: 0.67,
        열정: 0.8
      },
      meta: { color: 'blue' }
    }
  ];
  const captions = {
    성실: '성실',
    책임: '책임',
    소통: '소통',
    근면: '근면',
    열정: '열정'
  };
  const options = {
    axes: true
  }
  const state = {
    options: {
      chart: {
        height: '4000px' ,
        background: '#fff',
        offsetY: 5
      },
      xaxis: {
        categories: ['성실', '책임', '소통', '근면', '열정'],
        labels: {
          style: {
            fontSize: '15px',
            fontWeight: 400,
            color: ['blue']
          }
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 100
      }
    },
    series: [
      {
        name: "인적성",
        data: [70, 90, 80, 80, 69]
      }
    ]
  };

  return (
    <div className="h-screen" >
      <Header />
      <div className="grid grid-cols-10 gap-4">
        <div className="col-start-2 col-span-4 ...">
          <h1 className="font-bold py-24 text-3xl">평판열람시 이런 데이터를 받게 됩니다.</h1>
          <RadarChart
            captions={captions}
            data={data}
            size={450}
            options={options}
          />
          <h3>성실</h3>
          <h3>책임</h3>
          <h3>근면</h3>
          <h3>열정</h3>
          <h3>소통</h3>
          <ReactApexChart 
            options={state.options} 
            series={state.series} 
            type="radar" 
            height={350} 
          />
          총평: 박00님은 전 직장에서 팀 동료와 소통을 활발하게 잘하고 끝까지 맡은 업무를 책임지는 등 여러 방면에서 좋은 모습을 보여
          (주) 000 대표님이 원하시는 인재상과 89% 일치합니다.
        </div>
      </div>
    </div>
  )
}

