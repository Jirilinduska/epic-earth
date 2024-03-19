import React from 'react'
import { Country } from '../api/useFetch' 
import './GeoDataItem.scss'


interface GeoDataItemProps {
    apiData: Country
}

const GeoDataItem: React.FC <GeoDataItemProps> = ( { apiData }) => {

  return (
    <div className="data-item">

        <div className="data-flag">
          <img src={(apiData as Country).flags.png} alt="country-flag" />
        </div>

        <p className='data-name'>{(apiData as Country).name.common}</p>

        <p className="data-population">{(apiData as Country).population.toLocaleString()}</p>
   
        <p className="data-area">{(apiData as Country).area.toLocaleString()}</p>
    </div>
  )
}

export default GeoDataItem