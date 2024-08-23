import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png'


export function Cards() {
    return (
      <section>
        <img src={cardBack} alt='bg-card-back'/>
        <img src={cardFront} alt='bg-card-front'/>
      </section>
    );
  }
