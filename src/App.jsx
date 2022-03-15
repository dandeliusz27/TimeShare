import './App.css';
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendsPage from './routes/FriendsPage'
// import ProfilePage from './routes/ProfilePage'
import HomePage from './routes/HomePage';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <TitleBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/profile" element={<ProfilePage />}/> */}
        <Route path="/friends" element={<FriendsPage />}/>
      </Routes>
      <Navbar/>
    </BrowserRouter>
    </div>
  );
}

export default App;
