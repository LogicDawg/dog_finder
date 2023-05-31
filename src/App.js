
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App({dogs}) {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav dogs={dogs}/>
    <Switch>
    <Route exact path="/dogs" >
      <DogList name={dogs}/> // what props will this need?
    </Route>
    <Route path="/dogs/:name" >
      <DogDetails /> // what props will this need?
    </Route>
    <Redirect to="/dogs" />
    </Switch>
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      //src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      //src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      //src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      //src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}


export default App;
