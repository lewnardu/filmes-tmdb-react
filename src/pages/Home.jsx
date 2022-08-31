import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import Filtro from '../components/Filtro';

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [filtro, setFiltro] = useState('top_rated');
    const [title, setTitle] = useState('Melhores Filmes');
    
    const getTopRatedMovies = async (url) => {  
        const response = await fetch(url);
        const data = await response.json();
        if(!data.results) {
            setTopMovies([data]);
        }else {
            setTopMovies(data.results);
        }
    };

    const stateFiltroParaHome = (filtro, titulo) => {
        setFiltro(filtro)
        setTitle(titulo)
    }
    
    useEffect(() => {
        const topRatedUrl = `${moviesURL}${filtro}?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    },[filtro]);

    return (
        <>
            <Filtro stateFiltroParaHome={stateFiltroParaHome}/>
            <div className='container'>
                <h2 className='title'>{title}</h2>
                <div className='movies-container'>
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
                </div>
            </div>
        </>
    )
};

export default Home;