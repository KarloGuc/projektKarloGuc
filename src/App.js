import './App.css';
import{Route, BrowserRouter as Router} from "react-router-dom";
import Naslovna from "./Components/Naslovna.js";
import Opcenito from "./Components/Opcenito.js";
import Poveznica from "./Components/Poveznica.js";
import Zadnja from "./Components/Zadnja.js";
import Header from "./Header.js";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Router>
          <Route exact path="/" component={Naslovna}></Route>
          <Route path="/opcenito" component={Opcenito}></Route>
          <Route path="/poveznica" component={Poveznica}></Route>
          <Route path="/zadnja" component={Zadnja}></Route>
          
      </Router>
      <Footer>sdsd</Footer>
    </div>
  );
}

export default App;
