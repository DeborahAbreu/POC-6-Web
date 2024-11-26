"use client";
import {movie} from '@/data/movie';
import { useMemo } from 'react';

interface SeatGridProps {
    selectedSeats: number[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
}

const SeatGrid: React.FC<SeatGridProps> = ({
    selectedSeats,
    setSelectedSeats,
}) => {
    const seatsMemo = useMemo(() => {
        const chunkSize = 8;
        const chunks = [];
        for (let i = 0; i < movie.assentos.length; i += chunkSize) {
            chunks.push(movie.assentos.slice(i, i + chunkSize));
        }
        return chunks;
    }, [movie.assentos]);

    return (
        <div className="seat-grid">
            {seatsMemo.map((chunk, index) => (
                <div className="seat-row" key={index}>
                    {chunk.map((seat) => (
                        <button
                            onClick={() => {
                                if (!seat.disponivel) {
                                    return;
                                }

                                if (selectedSeats.includes(seat.numero)) {
                                    setSelectedSeats(
                                        selectedSeats.filter(
                                            (selected) => selected !== seat.numero
                                        )
                                    );
                                } else {
                                    setSelectedSeats([...selectedSeats, seat.numero]);
                                }
                            }}
                            className={`
                                seat
                                ${seat.disponivel ? 'available' : 'unavailable'}
                                ${selectedSeats.includes(seat.numero) ? 'selected' : ''}
                            `} key={seat.numero} />
                    ))}
                </div>
            ))}
            <div className="screen">
                tela
            </div>
        </div>
    );
};

export default SeatGrid;
