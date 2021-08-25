import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Support from "./pages/support";
import Features from "./pages/features";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import PostDetails from "./pages/post-details";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/features' component={Features} />
        <Route path='/support' component={Support} />
        <Route path='/about' component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/blog/posts/:id' component={PostDetails} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
