import React, { Suspense, lazy } from 'react'

const BasicLayout = lazy(() => import('./layout'))

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<p>Loading component...</p>}>
        <BasicLayout />
      </Suspense>
    </>
  )
}
export default App
