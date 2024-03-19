import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout