import AppLayout from "./components/AppLayout";
import "./style.css";
import HomeView from "./views/Home";
import { Routes as Switch, Route } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <AppLayout>
      <Routes />
    </AppLayout>
  );
};

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" element={<HomeView />} />
    </Switch>
  );
};

export default Home;
