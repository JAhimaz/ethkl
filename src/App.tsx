import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "@routes"
import ThemeProvider from './App.Theme'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <Suspense fallback={<div>loading</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
