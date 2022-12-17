import logo from './logo.svg';
import './App.css';

import { Navbar } from './Components/Navbar';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import Homescreen from './Screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Homescreen/>} />
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
