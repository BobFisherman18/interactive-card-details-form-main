import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cards } from './bg-cards.jsx';
import { Inputs } from './inputs.jsx';
import './css/interactive-card.css';


  
  export default function MyApp() {
    return (
      <React.StrictMode>
        <main className='container-fluid-md'>
          <Cards />
          <Inputs />
          <div>
          Thank you!
          We've added your card details
          Continue
          </div>
        </main>
      </React.StrictMode>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <MyApp />
  );