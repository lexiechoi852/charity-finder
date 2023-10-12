import { Routes, Route } from 'react-router-dom';
import CharityDetail from './pages/CharityDetail';
import SearchResult from './pages/SearchResult';
import Favorites from './pages/Favorites';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} /> 
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/charity/:id" element={<CharityDetail />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
    </>
  )
}

export default App
