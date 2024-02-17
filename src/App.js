import { useEffect, useState } from 'react';
import './App.css';
import MoviesList from './components/moviesList/MoviesList';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesList from './components/favorites/FavoritesList';
import Movie from './components/movie/Movie';
import { useDispatch } from 'react-redux';
import { fetchApi } from './redux/moviesAction';

function App() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('venom')
  
  useEffect(()=>{
    dispatch(fetchApi(search))
  },[search,dispatch])

  return (
    <BrowserRouter className="App">
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<MoviesList search={search}/>} />
        <Route path='/:id' element={<Movie />} />
        <Route path='/favorites' element={<FavoritesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
