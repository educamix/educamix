import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AuthUserProvider from "./context/auth";
import { PostsProvider } from "./context/Posts/PostsContext";
import { UsersProvider } from "./context/Users/UsersContext";
import Quiz from "./pages/Quiz";
import { Ranking } from "./pages/Ranking";
import { Summary } from "./pages/Summary";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

export default function AppRouter() {
  return (
    <main>
      <AuthUserProvider>
        <PostsProvider>
          <UsersProvider>
            <Router>
              <Suspense fallback={<LoadingComponent />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/ranking" element={<Ranking />} />
                  <Route path="/summary" element={<Summary />} />
                </Routes>
              </Suspense>
            </Router>
          </UsersProvider>
        </PostsProvider>
      </AuthUserProvider>
    </main>
  );
}
