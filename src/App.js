import './App.css';
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { StateProvider } from './contexts/MovieContext';

function App() {
    return (
        <StateProvider>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/favorites' element={ <Favorites /> }/>
                </Routes>
            </div>
        </StateProvider>
    );
}

export default App;
