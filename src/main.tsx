import Loading from '@/components/Loading/index'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'
import './main.css'
const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
