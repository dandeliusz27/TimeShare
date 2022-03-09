import './App.css';
import { Link } from "react-router-dom";
import  Home  from "./routes/Home";
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar/>
      <Home/> 
      <Navbar/>
    </div>
  );
}

export default App;
