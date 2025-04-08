'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
  status: 'available' | 'selected' | 'booked';
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [event, setEvent] = useState({
    id: params.id,
    title: 'Summer Music Festival',
    date: 'June 15, 2024',
    location: 'Central Park',
    description: 'Join us for a day of amazing music and performances',
    image: '/event1.jpg',
    price: {
      vip: 150,
      standard: 80,
      economy: 50
    }
  });

  // Initialize seating layout
  const [seats, setSeats] = useState<Seat[]>(() => {
    const generateSeats = () => {
      const seatArray: Seat[] = [];
      // VIP rows (A-B)
      for (let row of ['A', 'B']) {
        for (let i = 1; i <= 10; i++) {
          seatArray.push({
            id: `${row}${i}`,
            row,
            number: i,
            price: event.price.vip,
            status: 'available'
          });
        }
      }
      // Standard rows (C-F)
      for (let row of ['C', 'D', 'E', 'F']) {
        for (let i = 1; i <= 12; i++) {
          seatArray.push({
            id: `${row}${i}`,
            row,
            number: i,
            price: event.price.standard,
            status: 'available'
          });
        }
      }
      // Economy rows (G-J)
      for (let row of ['G', 'H', 'I', 'J']) {
        for (let i = 1; i <= 14; i++) {
          seatArray.push({
            id: `${row}${i}`,
            row,
            number: i,
            price: event.price.economy,
            status: 'available'
          });
        }
      }
      return seatArray;
    };

    return generateSeats();
  });

  const handleSeatClick = (seatId: string) => {
    const seat = seats.find(s => s.id === seatId);
    if (seat && seat.status !== 'booked') {
      const newSeats = seats.map(s => {
        if (s.id === seatId) {
          return {
            ...s,
            status: s.status === 'available' ? 'selected' : 'available'
          };
        }
        return s;
      });
      setSeats(newSeats);
      setSelectedSeats(prev => 
        prev.includes(seatId) 
          ? prev.filter(id => id !== seatId)
          : [...prev, seatId]
      );
    }
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seatId) => {
      const seat = seats.find(s => s.id === seatId);
      return total + (seat?.price || 0);
    }, 0);
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <button className="back-button" onClick={() => router.push('/events')}>
          Back to Events
        </button>
        <h1>{event.title}</h1>
      </div>

      <div className="event-details">
        <div className="event-image" style={{ 
          backgroundImage: `url(${event.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px'
        }}></div>
        <div className="event-info">
          <p className="event-date">{event.date}</p>
          <p className="event-location">{event.location}</p>
          <p className="event-description">{event.description}</p>
        </div>
      </div>

      <div className="seating-section">
        {/* <h2>Select Your Seats</h2>
        <div className="seating-legend">
          <div className="legend-item">
            <div className="seat-demo available"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="seat-demo selected"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="seat-demo booked"></div>
            <span>Booked</span>
          </div>
        </div> */}

        <div className="stage">STAGE</div>
        
        <div className="seating-plan">
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(row => (
            <div key={row} className="seat-row">
              <div className="row-label">{row}</div>
              {seats
                .filter(seat => seat.row === row)
                .map(seat => (
                  <div
                    key={seat.id}
                    className={`seat ${seat.status}`}
                    onClick={() => handleSeatClick(seat.id)}
                  >
                    {seat.number}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="booking-summary">
          <div className="selected-seats">
            <h3>Selected Seats:</h3>
            <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
          </div>
          <div className="total-price">
            <h3>Total Price:</h3>
            <p>${getTotalPrice()}</p>
          </div>
          <button 
            className="book-button"
            disabled={selectedSeats.length === 0}
            onClick={() => alert('Booking confirmed!')}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
} 