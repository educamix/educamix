import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingComponent from './components/LoadingComponent'
import Register from './pages/Register'
import Admin from './pages/Admin'
import AuthUserProvider from './context/auth'
import { UsersProvider } from './context/Users/UsersContext'
import Quiz from './pages/Quiz'
import { Ranking } from './pages/Ranking'
import { Summary } from './pages/Summary'
import { PrivateRoute } from './components/PrivateRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

export default function AppRouter() {
  return (
    <main>
      <AuthUserProvider>
        <UsersProvider>
          <Router>
            <Suspense fallback={<LoadingComponent />}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/admin" element={
                    <>
                      <PrivateRoute allowedRoles={['teacher']}>
                        <Admin />
                      </PrivateRoute>
                    </>
                }
                />
                <Route
                  path="/" element={
                    <>
                      <PrivateRoute allowedRoles={['teacher', 'student']}>
                        <Home />
                      </PrivateRoute>
                    </>
                  }
                />
                <Route
                  path="/quiz" element={
                    <>
                      <PrivateRoute allowedRoles={['teacher', 'student']}>
                        <Quiz />
                      </PrivateRoute>
                    </>
                  }
                />
                <Route
                  path="/ranking" element={
                    <>
                      <PrivateRoute allowedRoles={['teacher', 'student']}>
                        <Ranking />
                      </PrivateRoute>
                    </>
                  }
                />
                <Route
                  path="/summary" element={
                    <>
                      <PrivateRoute allowedRoles={['teacher']}>
                        <Summary />
                      </PrivateRoute>
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </Router>
        </UsersProvider>
      </AuthUserProvider>
    </main>
  )
}
