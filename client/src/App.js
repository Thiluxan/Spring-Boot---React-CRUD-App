import './App.css';
import PerosnList from './components/PerosnList'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Person from './components/Person'
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PerosnList} />
        <Route exact path="/person/:id" component={Person} />
        <Route exact path="/addPerson" component={AddPerson} />
        <Route exact path="/updatePerson/:id" component={EditPerson} />
      </Router>
    </div>
  );
}

export default App;
