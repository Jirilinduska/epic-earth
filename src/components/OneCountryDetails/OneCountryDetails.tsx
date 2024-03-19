import './OneCountryDetails.scss'
import { Link } from 'react-router-dom'

interface OneCountryProps {
  oneCountry: object
}

interface OneCountryInfo {

  name: {
    common: string,
    official: string
  },
  flags: {
    png: string
  },
  maps: {
    googleMaps: string
  },
  timezones: string[],
  capital: string[],
  region: string,
  subregion: string,
  population: number,
  independent: boolean,
  area: number,
  borders: string[],

}

const OneCountryDetails: React.FC<OneCountryProps> = ( { oneCountry } ) => {

  return ( 
    <div className="details">

        <div className="details-content">
            
          <div className="details-top">

            <div className="details-flag">
              <img src={(oneCountry as OneCountryInfo).flags.png} alt="" />
            </div>

            <div className="details-info">

              <h2>{(oneCountry as OneCountryInfo).name.common}</h2>

              <p>Capital city: {(oneCountry as OneCountryInfo).capital}</p>

              <p>Region: {(oneCountry as OneCountryInfo).region}</p>

              <p>Subregion: {(oneCountry as OneCountryInfo).subregion}</p>

              <p>Population: {(oneCountry as OneCountryInfo).population.toLocaleString()}</p>

              <p>Timezone: {(oneCountry as OneCountryInfo).timezones[0]}</p>

              <Link 
                to={(oneCountry as OneCountryInfo).maps.googleMaps} 
                target='_blank'
              >
                Show on Google Maps
              </Link>

            </div>

          </div>

          <div className="details-bottom">

            <p>
              {`${(oneCountry as OneCountryInfo).name.common}, officially "${(oneCountry as OneCountryInfo).name.official}"

                is ${(oneCountry as OneCountryInfo).independent ? ' independent': ' dependent'} country

                located in ${(oneCountry as OneCountryInfo).region}.
                `}
            </p>

            <p>
              {`With ${(oneCountry as OneCountryInfo).capital} as its capital, 

                it has a population of ${(oneCountry as OneCountryInfo).population.toLocaleString()}

                and covers an area of ${(oneCountry as OneCountryInfo).area.toLocaleString()} km².
              `}
            </p>

          </div>

        </div>

    </div>
  )
}

export default OneCountryDetails