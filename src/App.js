import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Layout from './components/Nav';
import './styles/style.css';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Booking" element={<Booking />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
