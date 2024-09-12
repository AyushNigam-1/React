import logo from './logo.svg';
import './App.css';
import NoteState from './context/notes/noteState';
import About from './components/About';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)
  const reduxCount = useSelector((state) => state.counter.value)

  return (
    <>
      <NoteState>
        <div className="App">
          <About count={count} />
          <button onClick={() => setCount(count + 1)}>{count}</button>
          <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
        </div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </NoteState>
    </>
  );
}

export default App;
