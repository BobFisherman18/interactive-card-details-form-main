import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png';
import mobile from './images/bg-main-mobile.png';
import desktop from './images/bg-main-desktop.png';
import { CardNumbers } from './card-numbers.jsx';
import { CvcNumbers } from './card-numbers.jsx';


export function Cards() {
    return (
      <section id='cards'>
        <picture>
          <source media='(min-width: 576px)' srcSet={desktop} />
          <img src={mobile} alt='bg-mobile' className='img-fluid' id='bg-mobile'/>
        </picture>
        <div className='position-relative'>
          <img src={cardBack} alt='bg-card-back' id='cardBack'/>
          <CvcNumbers />
        </div>
        <div className='position-relative'>
          <img src={cardFront} alt='bg-card-front' id='cardFront'/>
          <CardNumbers />
        </div>
      </section>
    );
  }
