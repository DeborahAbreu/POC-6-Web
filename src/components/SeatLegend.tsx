"use client";

const SeatLegend: React.FC = () => {

    return (
        <div className="legend">
            <div className="legend-item">
                <div className="legend-color available"></div>
                <span>Disponível</span>
            </div>
            <div className="legend-item">
                <div className="legend-color selected"></div>
                <span>Selecionado</span>
            </div>
            <div className="legend-item">
                <div className="legend-color unavailable"></div>
                <span>Indisponível</span>
            </div>
        </div>
    );
};

export default SeatLegend;
