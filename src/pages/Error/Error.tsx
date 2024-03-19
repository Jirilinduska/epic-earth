import { useEffect } from "react"
import ErrorPageContent from "../../components/ErrorPageContent/ErrorPageContent"

const Error = () => {

  useEffect( () => {
    document.title = '404 Page Not Found :('
  }, [] )

  return (
    <>
        <ErrorPageContent />
    </>
  )
}

export default Error