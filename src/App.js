import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Features from "./pages/features";
import Home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/features' component={Features} />
        <Route path='/about' component={About} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
