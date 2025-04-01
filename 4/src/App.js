import React, { useCallback, useRef, useState, useEffect } from 'react';
import './App.css';
import Person from './components/user'

function App() {

  const [users, setUsers] = useState([{name: 'James'}, {name: 'Bond'}])
  const [value, setValue] = useState(10)
  const inputRef = useRef()
  const numberRef = useRef(1)
console.log(numberRef.current)
  useEffect(() => {
    inputRef.current.focus()
    // console.log('Component has mounted')
  }, [])

  // useEffect(() => {
  //   console.log("value is updated")
  // }, [value])

  // useEffect(() => {
  //   console.log('Any state of component has updated')
  // })

  const onInputChangeHandler = useCallback((value, index) => {
    setUsers((prevUsers) => {
      prevUsers[index].name = value;
      return [...prevUsers]
    })
  }, [])

  const onAddUserClickHandler = () => {
    setUsers([...users, {name: ''}])
  }

  const onRemoveUserHandler = useCallback((index) => {    
    setUsers((prevUsers) => {
      prevUsers.splice(index, 1);
      return [...prevUsers]
    })
  }, [])

  const onSave = () => {
    console.log(inputRef.current.value)
  }

  const onNumberIncrement = () => {
    numberRef.current = 30
  }

  return (
    <div className="App">
      <button onClick={() => setValue(value + 20)}>Add</button>
      <input ref={inputRef} />
      <button onClick={onSave}>Save</button>
      <button onClick={onNumberIncrement}>onNumberIncrement</button>
      <div>
        <button onClick={onAddUserClickHandler}>Add new User</button>
      </div>
      {users.map((user, index) => {
        return <Person 
                  key={index} 
                  index={index}
                  name={user.name} 
                  onChange={onInputChangeHandler}
                  onRemove={onRemoveUserHandler}
                />
      })}
    </div>
  );
}

export default App;
