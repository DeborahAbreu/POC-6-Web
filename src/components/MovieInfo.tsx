"use client";
import { movie } from '@/data/movie';

const MovieInfo: React.FC = () => {
    return (
        <dl className='movie-info'>
            <dt>Sinopse do filme</dt>
            <dd>{movie.sinopse}</dd>
            <dt>Data de lancamento</dt>
            <dd>{movie.dataLancamento}</dd>
            <dt>Direção</dt>
            <dd>{movie.direcao}</dd>
        </dl>
    );
};

export default MovieInfo;
