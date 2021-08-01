import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Pages/Homepage/Home";
import Products from "./Component/Pages/Products";
import Services from "./Component/Pages/Services";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/Lavish-Dev/" exact component={Home} />
          <Route path="/Lavish-Dev/products" component={Products} />
          <Route path="/Lavish-Dev/services" component={Services} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
