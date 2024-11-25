import React, { useState, createContext, useEffect, useContext, useRef, forwardRef } from "react";
import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png';
import mobile from './images/bg-main-mobile.png';
import desktop from './images/bg-main-desktop.png';
import { CardNumbers } from './card-numbers.jsx';
import { CvcNumbers } from './card-numbers.jsx';


export function Cards() {

  const [position, setPosition] = useState(0);
  const [margin, setMargin] = useState(24);
  const [marginClass, setMarginClass] = useState(true);

  
  useEffect(() => {
    const handleResize = () => {
      // Set margin to the current window width
      if (window.innerWidth >= 576) {
        setPosition(position => (position < 150 ? position + 1 : position));
      }
      else {
          setPosition(position);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /*
  useEffect(() => {
    const handleResize = () => {
      // Set margin to the current window width
      if (window.innerWidth >= 611) {
          setMarginClass(!marginClass);
          setMargin(60); 
      }
      else if (window.innerWidth >= 576) {
          setMarginClass(!marginClass);
          setMargin(margin => (margin < 60 ? margin + 1 : margin));
      }
      else {
          setMarginClass(!marginClass);
          setMargin(margin);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

*/

    return (
      <section 
        id='cards' 
        //style={{marginRight: `${margin}px`}}
        //className={marginClass ? 'mx-4' : ``} 
        >
        <picture>
          <source media='(min-width: 576px)' srcSet={desktop} />
          <img src={mobile} alt='bg-mobile' className='img-fluid' id='bg-mobile'/>
        </picture>
        <div className='position-relative' id='cvcNumbersField' /*style={{bottom: `${position}px`}}*/>
          <img src={cardBack} alt='bg-card-back' id='cardBack'/>
          <CvcNumbers />
        </div>
        <div className='position-relative' id='cardNumbersField' /*</section>style={{ bottom: `${position}px`}}*/>
          <img src={cardFront} alt='bg-card-front' id='cardFront'/>
          <CardNumbers />
        </div>
      </section>
    );
  }
