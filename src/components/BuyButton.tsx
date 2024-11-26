"use client";
import { movie } from '@/data/movie';
import { useMemo } from 'react';

interface BuyButtonProps {
    selectedSeats: number[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
}

const BuyButton: React.FC<BuyButtonProps> = ({
    selectedSeats,
    setSelectedSeats,
}) => {
    const total = useMemo(() => {
        return selectedSeats.length * movie.preco;
    }, [selectedSeats, movie.assentos]);

    return (
        <button
            className="buy-button"
            onClick={() => {
                alert("Compra realizada com sucesso!")
                setSelectedSeats([]);
            }}
        >
            Comprar
            <span className="total-price">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </button>
    );
};

export default BuyButton;
