
import { useEffect } from "react"
import Hero from "../../components/Hero/Hero"

const Home = () => {

  useEffect( () => {
    document.title = 'EpicEarth - geography app' 
  }, [] )

  return (
    <>
      <Hero />
    </>
  )
}

export default Home