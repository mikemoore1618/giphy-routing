import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Cat from './Components/Cat'
import Puppy from './Components/Puppy'
import Turtle from './Components/Turtle'
import Shark from './Components/Shark'
import Whale from './Components/Whale'
import Koala from './Components/Koala'
import Sloth from './Components/Sloth'
import Ant from './Components/Ant'



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <nav>
        <Link className='button' to="/">HOME</Link>
        <Link className='button' to="/cat">CAT</Link>
        <Link className='button' to="/puppy">PUPPY</Link>
        <Link className='button' to="/turtle">TURTLE</Link>
        <Link className='button' to="/shark">SHARK</Link>
        <Link className='button' to="/whale">WHALE</Link>
        <Link className='button' to="/koala">KOALA</Link>
        <Link className='button' to="/sloth">SLOTH</Link>
        <Link className='button' to="/ant">ANT</Link>
      </nav>

        <Route exact path='/' component={Home}/>
        <Route exact path='/cat' component={Cat}/>
        <Route exact path='/puppy' component={Puppy}/>
        <Route exact path='/turtle' component={Turtle}/>
        <Route exact path='/shark' component={Shark}/>
        <Route exact path='/whale' component={Whale}/>
        <Route exact path='/koala' component={Koala}/>
        <Route exact path='/sloth' component={Sloth}/>
        <Route exact path='/ant' component={Ant}/>
      </div>
    );
  }
}

export default App;
