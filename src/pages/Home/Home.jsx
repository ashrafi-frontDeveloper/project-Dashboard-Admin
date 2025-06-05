import React from 'react';
import { xAxisData } from '../../data';
import WidgetSm from './../../components/widgetSm/widgetSm';
import WidgetLg from './../../components/WidgetLg/WidgetLg';
import Chart from './../../components/Charts/Charts';
import Feature from './../../components/features/Feature';

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
