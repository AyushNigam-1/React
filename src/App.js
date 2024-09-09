import logo from './logo.svg';
import './App.css';
import NoteState from './context/notes/noteState';
import About from './components/About';

function App() {
  return (
    <>
    <NoteState>
    <div className="App">
    <About/>
    </div>
    </NoteState>
    </>
  );
}

export default App;
