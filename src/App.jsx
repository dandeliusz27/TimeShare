import './App.css';
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendsPage from './routes/FriendsPage'
import ProfilePage from './routes/ProfilePage'
import HomePage from './routes/HomePage';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div>
      {isAuthenticated 
      ? <div className="App">
          <BrowserRouter>
            <TitleBar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/friends" element={<FriendsPage />}/>
            </Routes>
            <Navbar/>
          </BrowserRouter>
        </div>
      : <LoginButton/> }
    </div>
  );
}

export default App;
