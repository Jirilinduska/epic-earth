import SharedLayout from "./pages/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"
import Countries from "./pages/Countries/Countries"
import Geodata from "./pages/Geodata/Geodata"

import Error from "./pages/Error/Error"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={ <SharedLayout /> } >

                <Route index element={ <Home /> } />
 
                <Route path="/countries" element={ <Countries /> } />

                <Route path="/geodata" element={ <Geodata /> } />

                <Route path="*" element={ <Error /> } />
            </Route>


        </Routes>
    
    </BrowserRouter>
  )
}

export default App