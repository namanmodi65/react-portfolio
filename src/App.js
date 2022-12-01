import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
