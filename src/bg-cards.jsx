import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png';
import mobile from './images/bg-main-mobile.png';
import desktop from './images/bg-main-desktop.png';


export function Cards() {
    return (
      <section id='cards'>
        <picture>
          <img src={mobile} alt='bg-mobile' className='img-fluid' id='bg-mobile'/>
          <source media='(min-width:768px)' srcSet={desktop} />
        </picture>
        <img src={cardBack} alt='bg-card-back' id='cardBack'/>
        <img src={cardFront} alt='bg-card-front' id='cardFront'/>

      </section>
    );
  }
