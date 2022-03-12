import './App.css';
import  Home  from "./routes/Home";
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendsPage from './routes/FriendsPage'
import ProfilePage from './routes/ProfilePage'

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <TitleBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProfilePage" element={<ProfilePage />}/>
        <Route path="/FriendsPage" element={<FriendsPage />}/>
      </Routes>
      <Navbar/>
    </BrowserRouter>
    </div>
  );
}

export default App;
