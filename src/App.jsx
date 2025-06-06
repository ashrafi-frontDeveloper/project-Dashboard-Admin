import React from 'react'
import routes from './routes'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/sidebar'
import { useRoutes } from 'react-router-dom'
import './App.css'


export default function App() {

  let router = useRoutes(routes)

  return (
    <>
        <Topbar />
        <div className="container">
            <Sidebar />
            {router}
        </div>
    </>
  )
}
