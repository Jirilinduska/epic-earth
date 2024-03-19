import './ContriesSection.scss'
import OneCountry from '../OneCountry/OneCountry'
import Loader from '../Loader/Loader'
import useFetch from '../api/useFetch'

import _ from 'lodash'
import { ChangeEvent, useEffect, useState } from 'react'

const ContriesSection = () => {

  const apiUrlAll = 'https://restcountries.com/v3.1/all'
  const { loading, apiData, getData } = useFetch(apiUrlAll)

  const [inputValue, setInputValue] = useState('')
  const [region, setRegion] = useState('')
  const [isInputTyped, setIsInputTyped] = useState(false)

  const apiUrlRegion = `https://restcountries.com/v3.1/region/${region}`

  const debouncedSearch = _.debounce((value: string) => {
    if (value !== '') {
      getData(`https://restcountries.com/v3.1/name/${value}`)
    } else {
      getData(apiUrlAll)
    }
  }, 200)


  const handleSearchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setIsInputTyped(true)
  }

  const handleSelectedRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value)
    setIsInputTyped(false)
  }


  useEffect(() => {

    if (region !== '' && !isInputTyped) {

      getData(apiUrlRegion)
    } else if (isInputTyped) {

      debouncedSearch(inputValue)
    } else {

      getData(apiUrlAll)
    }

    return () => {
      debouncedSearch.cancel()
    }

  }, [getData, region, apiUrlRegion, apiUrlAll, debouncedSearch, inputValue, isInputTyped])
  

  if(loading) {
    return <Loader />
  }

  return (
    <div className="countries">
        
        <div className="search">

            <div className="search-left">

                <input 
                  type="text" 
                  className="search-country" 
                  placeholder="Search country..."
                  value={inputValue}
                  onChange={handleSearchCountry}
                />

            </div>

            <div className="search-right">

              <select 
                name="regions" 
                id="select-region"
                onChange={handleSelectedRegion}
                value={isInputTyped ? '' : region}
              >

                <option value="">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

              </select>

            </div>


        </div>

        <div className="countries-items">
          { apiData && 
            apiData.map( (oneCountry, index) => {
              return <OneCountry key={index} oneCountry={oneCountry}/>
            })
          }
        </div>

    </div>
  )
}

export default ContriesSection