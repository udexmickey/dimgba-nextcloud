import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import NotFound from "./components/NotFound";
import TopNav from "./components/topNav";

const RoutesComponent = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
