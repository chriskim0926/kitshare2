
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Listings from "./pages/listing/Listing"
import Listinginfo from "./pages/listingInfo/listingInfo"
import AddListing from "./pages/addListing/AddListing"
import Owner from "./pages/owner/Owner"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listing/:id" component={Listinginfo} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/owner/add" component={AddListing} />
      </Switch>

    </Router>
  );
}

export default App;
