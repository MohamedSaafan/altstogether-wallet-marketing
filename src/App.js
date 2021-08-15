import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
