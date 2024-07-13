import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from './pages/NovoVideo';

function App() {

  return (
      <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/novovideo' index element={<NovoVideo />} />
            </Routes>
      </BrowserRouter>
  )
}

export default App
