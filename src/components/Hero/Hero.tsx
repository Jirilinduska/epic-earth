import './Hero.scss'

import heroitems from '../../data/heroitems'
import HeroItem from '../HeroItem/HeroItem'

const Hero = () => {
    
  return (
    <section className="hero">

        <div className="hero-items">
            {
                heroitems.map( (x) => <HeroItem key={x.id} {...x}/>)
            }
        </div>  

    </section>
  )
}

export default Hero