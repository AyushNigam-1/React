import logo from './logo.svg';
import './App.css';
import NoteState from './context/notes/noteState';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)

  return (
    <>
      <NoteState>
        <div className="App">
          <About count={count} />
          <button onClick={() => setCount(count + 1)}>{count}</button>
          <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
        </div>
      </NoteState>
    </>
  );
}

export default App;
