import { Router, Route } from 'wouter';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Certificates from "./pages/Certificates";
import Credentials from "./pages/Credentials";
import Badges from "./pages/Badges";
import Footer from './components/Footer';

import "./App.css"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/featured" component={Featured} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/credentials" component={Credentials} />
        <Route path="/badges" component={Badges} />
        <Footer />
      </Router>
    </>
  )
}

export default App;
