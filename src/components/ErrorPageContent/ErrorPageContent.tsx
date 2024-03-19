import './ErrorPageContent.scss'

import { Link } from 'react-router-dom'

const ErrorPageContent = () => {
  
  return (
    <section className="error-page">

        <p>404! This page might not exist! :( </p>

        <Link to="/">Back to homepage</Link>

    </section>
  )
}

export default ErrorPageContent