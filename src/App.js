import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import Heroku from './Screens/Heroku';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Heroku" element={<Heroku />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
