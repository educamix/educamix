import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingComponent from './components/LoadingComponent'
import Register from './pages/Register'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  )
}
