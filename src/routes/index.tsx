import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import Home with react.lazy
const Home = React.lazy(() => import('./Home'))

export const router = createBrowserRouter([
  // Main Page
  { path: '/', element: <Home /> },

])