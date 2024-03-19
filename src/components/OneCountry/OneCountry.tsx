import './OneCountry.scss'
import { Country } from '../api/useFetch'
import OneCountryDetails from '../OneCountryDetails/OneCountryDetails'
import { useState } from 'react'

interface OneCountryProps {
    oneCountry: Country
}

const OneCountry: React.FC<OneCountryProps> = ( {oneCountry} ) => {

    const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="one-country" onClick={ () => setShowDetails(!showDetails) }>

        {/* Details Modal Window */}
        {showDetails && <OneCountryDetails oneCountry={oneCountry as Country}/> }
        

        <div className="country-flag">
            <img src={(oneCountry as Country).flags.png} alt="country flag" />
        </div>

        <div className="country-info">

            <h3 className='country-name'>
                {(oneCountry as Country).name.common}
            </h3>

            <p className="country-capital">
                <span>Capital City:</span>
                {(oneCountry as Country).capital}
            </p>

            <p className="country-continent">
                <span>Region:</span>
                {(oneCountry as Country).region}
            </p>

            <p className="country-population">
                <span>Population:</span>
                {(oneCountry as Country).population.toLocaleString()}
            </p>

        </div>

    </div>
  )
}

export default OneCountry