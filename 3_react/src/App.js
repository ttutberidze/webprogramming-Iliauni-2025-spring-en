import React from 'react';
import './App.css';
import Person, {user2 as User2} from './components/user'

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Person title="Hello">
        James Bond
      </Person>
      <User2 />
    </div>
  );
}

// function App() {
//   return React.createElement('div', {className: 'App'}, React.createElement('p', {}, "Hello"));
// }

export default App;
