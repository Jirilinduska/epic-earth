
import { useEffect } from "react"
import GeoDataSection from "../../components/GeoDataSection/GeoDataSection"

const Geodata = () => {

  useEffect( () => {
    document.title = 'EpicEarth - geography data'
  }, [] )

  return (
    <>
        <GeoDataSection />
    </>
  )
}

export default Geodata