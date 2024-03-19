import './HeroItem.scss'

import { Link } from 'react-router-dom'

interface HeroItemProps {
    title: string,
    path: string,
    image: string
}

const HeroItem: React.FC<HeroItemProps> = ( { title, path, image}) => {

  return (
    <Link 
        className='hero-item'
        to={path}
    >
        <div className="item-image">
            <img 
                src={image}
                alt="hero-item" 
            />
        </div>

        <div className="item-text">
            <p>{title}</p>
        </div>
    
    </Link>
  )
}

export default HeroItem