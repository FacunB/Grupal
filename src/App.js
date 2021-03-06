import './App.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

import Ejercicio1 from './components/Ejercicio.jsx';
import Ejercicio2 from './components/Ejercicio2.jsx';
import Ejercicio3 from './components/Ejercicio3.jsx';
import Main from './components/main.jsx'

function App() {
  return (
    <Router>
      <div className="App">
      <Main></Main>
        <Switch>
          <Route path="/ejercicio1" exact>
            <Ejercicio1></Ejercicio1>
          </Route>
          <Route path="/ejercicio2" exact>
            <Ejercicio2></Ejercicio2>
          </Route>   
          <Route parth="/ejercicio3" exact>
            <Ejercicio3></Ejercicio3>
          </Route>         
        </Switch>
      </div>

    </Router>

  );
}

export default App;
