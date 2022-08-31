import { useState } from "react";
import './Filtro.css';

const Filtro = ({stateFiltroParaHome}) => {
    return (
        <ul className="filtros">
            <li><a onClick={() => stateFiltroParaHome('top_rated', 'Melhores Filmes')}>Melhores</a></li>
            <li><a onClick={() => stateFiltroParaHome('popular', 'Filmes Populares')}>Populares</a></li>
            <li><a onClick={() => stateFiltroParaHome('now_playing', 'Exibidos Recentemente')}>Exibidos</a></li>
            <li><a onClick={() => stateFiltroParaHome('upcoming', 'Filmes em breve')}>Em breve</a></li>
        </ul>
    )
}

export default Filtro;