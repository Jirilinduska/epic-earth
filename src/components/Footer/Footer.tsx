import './Footer.scss'

import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer>

      <div className="link">
        <Link 
          to="http://jirilinduska.cz/" 
          target='_blank'
        >
          @jirilinduska
        </Link>
      </div>

    </footer>
  )
}

export default Footer