import logo from './logo.svg';
import './App.css';
import { fetchFacts } from './redux/counter/countersSlice';
import NoteState from './context/notes/noteState';
import About from './components/About';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/countersSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './components/Service';
import Layout from './layout/Layout';
function App() {
  const state = useSelector((state) => state)
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)
  const dispatch = useDispatch()
  const count3 = useSelector((state) => state.counter.value)

  if (state.counter.isLoading) {
    return <h1>Loading...</h1>
  }
  const router = createBrowserRouter({
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  })
  return <RouterProvider router={router} />
  {/* <NoteState>
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
        <span>{count3}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(fetchFacts())} > fetch </button>
        {state.counter.data &&
          state.counter.data.map((fact) => <div>{fact.text} </div>)
        }
      </NoteState> */}

}

export default App;
