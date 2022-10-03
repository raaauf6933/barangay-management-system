import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./home";
// import Portal from "./portal";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/*" element={<Home />} />
      {/* <Route path="/portal/*" element={<Portal />} /> */}
    </Switch>
  );
};

export default App;
