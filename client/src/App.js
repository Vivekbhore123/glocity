import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Landingscreen from './screens/Landingscreen';


import Loginscreen from './screens/Loginscreen';
import Register from './screens/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Route path="/home" exact component={Homescreen} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/" exact component={Landingscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
