import { Outlet } from "react-router"

function App() {

  return (
    <>
      <nav>
        Navbar
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
