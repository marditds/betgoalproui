import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { NavMenu } from './components/NavMenu'
import { Home } from './components/Home'
import { League } from './components/League'
import { NotFound } from './components/NotFound';

function App() {

  return (
    <div className="App">
      <NavMenu />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='leagues'>
            <Route exact path=':leagueAlias' element={<League />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
