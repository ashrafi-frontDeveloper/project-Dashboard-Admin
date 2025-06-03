import React from 'react';
import { xAxisData } from '../../data';
import Feature from './../../components/features/Feature'
import Chart from './../../components/Charts/Charts'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  )
}
