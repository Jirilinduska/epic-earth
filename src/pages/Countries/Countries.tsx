
import { useEffect } from 'react'
import ContriesSection from '../../components/ContriesSection/ContriesSection'


const Countries = () => {

  useEffect( () => {
    document.title = 'EpicEarth - browse all countries'
  }, [] )

  return (
    <>
      <ContriesSection />
    </>
  )
}

export default Countries