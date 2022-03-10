import './App.css';
import { Link } from "react-router-dom";
import  HomePage  from "./routes/HomePage";
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar/>
      <HomePage/> 
      <Navbar/>
    </div>
  );
}

export default App;
