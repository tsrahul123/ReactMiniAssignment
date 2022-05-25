import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Loader from "./Components/Global/Loader";
import "./styles/main.css";

const HomePage = React.lazy(() => import("./Components/Pages/HomePage"));
const Booking = React.lazy(() => import("./Components/Pages/Booking"));
const suitabilitytool = React.lazy(() => import("./Components/Pages/Suitabilitytool"));

const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/suitabilitytool" component={suitabilitytool} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
