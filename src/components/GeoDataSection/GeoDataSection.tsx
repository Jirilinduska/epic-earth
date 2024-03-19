import './GeoDataSection.scss'
import GeoDataItem from '../GeoDataItem/GeoDataItem'
import Loader from '../Loader/Loader'


import useFetch from '../api/useFetch'
import { ChangeEvent, useEffect, useState } from 'react'


const GeoDataSection = () => { 

    const apiUrl = 'https://restcountries.com/v3.1/all'

    const { loading, apiData, getData } = useFetch(apiUrl)

    const [countries, setCountries] = useState(apiData)
    const [sortData, setSortData] = useState('')

    const handleChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortData(event.target.value)
    }

    const handleSort = (sortType: string) => {

        if(countries) {
            const sortedCountries = [...countries].sort((a, b) => {
                if (sortType === 'most') return b.population - a.population
                if (sortType === 'least') return a.population - b.population
                if (sortType === 'biggest') return b.area - a.area
                if (sortType === 'smallest') return a.area - b.area
                if (sortType === 'alphabetical') return a.name.common.localeCompare(b.name.common)
                return 0
              })

              setCountries(sortedCountries)
        }
    }



    
    
    useEffect(() => {

        if(sortData !== '') {
            handleSort(sortData)
        } else {
            setCountries(apiData)
        }

      }, [sortData, apiData])
      


    if(loading) {
        return <Loader />
    }

  return ( 
    
    <section className="data">

        <div className="data-sort">
            
            <select    
                className='select-sort'
                onChange={handleChangeSort}
            >

                <option value="">Sort by...</option>
                <option value="most">Most population</option>
                <option value="least">Least population</option>
                <option value="biggest">Biggest area</option>
                <option value="smallest">Smallest area</option>
                <option value="alphabetical">Alphabetically</option>

            </select>

        </div>
 


        <div className="data-items">

            <div className="data-info">
                <p>Flag</p>
                <p>Country name</p>
                <p>Population</p>
                <p>Area (km²)</p>
            </div>

            { countries && countries.map( (x, index) => <GeoDataItem key={index} apiData={x}/> )}

        </div>


    </section>
  )
}

export default GeoDataSection