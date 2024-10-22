import ReactDOM from 'react-dom/client';
import { Cards } from './bg-cards.jsx';
import { Inputs } from './inputs.jsx';
import { InputsProvider } from './inputs.jsx';
import './css/interactive-card.css';
import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  async function updateState() {
    setCount((prev) => prev + 1);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setText('Updated After 3s');
    // In React 18, both updates will be batched, despite the async nature
  }

  return (
    <div>
      <button onClick={updateState}>Update</button>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  );
}
  
  export default function MyApp() {
    return (
      <React.StrictMode>
        <main className='container-fluid-md'>
          <InputsProvider>
            <Cards />
            <Inputs />
          </InputsProvider>
          <div>
          Thank you!
          We've added your card details
          Continue
          </div>
          <MyComponent />
        </main>
      </React.StrictMode>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <MyApp />
  );