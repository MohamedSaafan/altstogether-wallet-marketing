import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Features from "./pages/features";
import Home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/features' component={Features} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
