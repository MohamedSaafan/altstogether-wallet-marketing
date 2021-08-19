import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Support from "./pages/support";
import Features from "./pages/features";
import Home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/features' component={Features} />
        <Route path='/support' component={Support} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
