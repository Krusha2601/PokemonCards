
import './App.css';
import Pokedetails from './components/pokedetails';
import Pokecards from './components/pokecards';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Pokedetails}/>
          <Route path="/pokemon/:name" Component={Pokecards}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
