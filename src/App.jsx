import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import GlobalStyles from "./components/GlobalStyles";
import { VideoProvider } from './context/VideoContext';

function App() {

  return (
      <BrowserRouter>
        <VideoProvider>
          <GlobalStyles />
              <Routes>
                    <Route index element={<Home />} />
                    <Route path='/novovideo' index element={<NovoVideo />} />
              </Routes>
        </VideoProvider>
      </BrowserRouter>
  )
}

export default App;
