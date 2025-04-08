'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';

interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
  status: 'available' | 'selected' | 'booked';
}

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  seats: Seat[];
}

export default function EventPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  useEffect(() => {
    const eventData: Event = {
      id: parseInt(params.id),
      title: searchParams.get('title') || '',
      date: searchParams.get('date') || '',
      location: searchParams.get('location') || '',
      description: searchParams.get('description') || '',
      image: searchParams.get('image') || '',
      seats: Array.from({ length: 100 }, (_, i) => ({
        id: `seat-${i + 1}`,
        row: String.fromCharCode(65 + Math.floor(i / 10)),
        number: (i % 10) + 1,
        price: 50,
        status: 'available' as const
      }))
    };

    setEvent(eventData);
    setSeats(eventData.seats);
  }, [params.id, searchParams]);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'booked') return;

    const updatedSeats = seats.map(s => {
      if (s.id === seat.id) {
        const newStatus: Seat['status'] = s.status === 'available' ? 'selected' : 'available';
        return {
          ...s,
          status: newStatus
        };
      }
      return s;
    });

    setSeats(updatedSeats);
    setSelectedSeats(updatedSeats.filter(s => s.status === 'selected'));
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  if (!event) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <button 
        className={styles.backButton}
        onClick={() => router.push('/')}
      >
        ← Back to Home
      </button>

      <div className={styles.eventHeader}>
        <div 
          className={styles.eventImage}
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className={styles.eventInfo}>
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      </div>

      <div className={styles.seatingChart}>
        <h2>Select Your Seats</h2>
        <div className={styles.seats}>
          {seats.map(seat => (
            <button
              key={seat.id}
              className={`${styles.seat} ${styles[seat.status]}`}
              onClick={() => handleSeatClick(seat)}
              disabled={seat.status === 'booked'}
            >
              {seat.row}{seat.number}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.summary}>
        <h2>Booking Summary</h2>
        <p>Selected Seats: {selectedSeats.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <button 
          className={styles.bookButton}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
} 