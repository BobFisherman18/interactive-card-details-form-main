import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cards } from './bg-cards.js';
import { Inputs } from './inputs.js';
import { Confirm } from './confirm.js';


  
  export default function MyApp() {
    return (
      <main className='container'>
        <Cards />
        <Inputs />
        <div>
          
        0000 0000 0000 0000
        Jane Appleseed
        00/00

        000

        Confirm

        Thank you!
        We've added your card details
        Continue
  
        </div>
      <Confirm />
      </main>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <MyApp />
  );