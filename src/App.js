import './App.css';
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/favorites' element={ <Favorites /> }/>
            </Routes>
        </div>
    );
}

export default App;
