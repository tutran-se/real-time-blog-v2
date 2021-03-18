import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import DashBoard from "./pages/DashBoard";
// import Home from "./pages/Home";
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Home = lazy(() => import("./pages/Home"));
const App = () => {
  return (
    <div className="container">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
            <Route>
              <div>Not Found: 404</div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
