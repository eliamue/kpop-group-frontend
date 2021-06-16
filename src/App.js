import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPage from './ListPage.js';
import KpopDetail from './KpopDetail.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/kpop/:id" exact component={KpopDetail}/>
            <Route path="/kpop" exact component={ListPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
