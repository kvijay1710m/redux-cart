import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <nav>
        <Navbar/>
      </nav>
     
      <main className="max-w-7xl mx-auto min-h-screen " >
        <Outlet />
      </main>
    </>
  )
}

export default App
