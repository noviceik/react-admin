import React from 'react'
import Guard from '@/router/routerGuard'
import { Outlet, BrowserRouter } from 'react-router-dom'
import RouteTable from '@/router/RouterView'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Guard>
          <div className="base-box">
            <Outlet />
            <RouteTable />
          </div>
        </Guard>
      </BrowserRouter>
    </>
  )
}

export default App
