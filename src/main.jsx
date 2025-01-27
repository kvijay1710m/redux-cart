import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>home</div>} />
        <Route path="/product" element={<div>product page</div>} />
        <Route path="/cart" element={<div>cart page</div>} />
      </Route>
    </Routes>
  </BrowserRouter> 
)
