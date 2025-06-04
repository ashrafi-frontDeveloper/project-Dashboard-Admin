import React from 'react';
import { xAxisData } from '../../data';
import Feature from './../../components/features/Feature'
import Chart from './../../components/Charts/Charts'
import WidgetSm from '../../components/widgetSm/widgetSm';
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  )
}
