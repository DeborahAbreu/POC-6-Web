"use client";

import Image from "next/image";
import styles from "./page.module.css";
import SeatGrid from "@/components/SeatGrid";
import { useState } from "react";
import SeatLegend from "@/components/SeatLegend";
import BuyButton from "@/components/BuyButton";
import Heading from "@/components/Heading";
import MovieInfo from "@/components/MovieInfo";

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  return (
    <main className={styles.page}>
      <Heading />
      <section className="seats-and-info">
        <div className="seats-and-legend">
          <SeatGrid
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
          <SeatLegend />
        </div>
        <MovieInfo />
      </section>
      <BuyButton selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
    </main>
  );
}
