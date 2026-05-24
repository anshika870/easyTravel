import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import School from "./pages/School"

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/school" element={<School />} />

    </Routes>

  )

}

export default App