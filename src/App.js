import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import Nomatch from "./Components/Nomatch/Nomatch";
import ProductDetails from "./Components/Product Detail/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Shop></Shop> */}
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
