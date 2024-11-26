"use client";
import { movie } from '@/data/movie';

const Heading: React.FC = () => {
    return (
        <header>
            <h1>{movie.titulo}</h1>
            <p>{movie.horario}</p>
        </header>
    );
};

export default Heading;
