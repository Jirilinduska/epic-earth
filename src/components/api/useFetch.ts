import { useEffect, useState } from "react"

export interface Country {
    name: {
      common: string
    },
    flags: {
      png: string
    },
    population: number,
    area: number,
    capital: string[],
    region: string,
  }

const useFetch = (url: string) => { 
 
    const [loading, setLoading] = useState(true)
    const [apiData, setApiData] = useState<Country[] | null>(null) 
    const [error, setError] = useState<Error | null>(null)

    const getData = (apiUrl: string) => {
        fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then( res => {
          setApiData(res)
          setLoading(false)
        })
        .catch( err => {
          setError(err.message)
          setLoading(false)
        })
      }

    useEffect( () => {
        getData(url)
    }, [url] )


    return { loading, apiData, error, getData }

}

export default useFetch