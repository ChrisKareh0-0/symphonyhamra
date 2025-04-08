'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import CirclePattern from '../components/CirclePattern';

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

function EventsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: 'Elden Ring Concert',
      date: '2024-04-15',
      location: 'Grand Concert Hall',
      description: 'Experience the epic soundtrack of Elden Ring performed live by a full orchestra.',
      image: '/images/elden-ring.jpg',
      seats: Array.from({ length: 100 }, (_, i) => ({
        id: `seat-${i + 1}`,
        row: String.fromCharCode(65 + Math.floor(i / 10)),
        number: (i % 10) + 1,
        price: 50,
        status: 'available' as const
      }))
    },
    {
      id: 2,
      title: 'Classical Night',
      date: '2024-04-20',
      location: 'Symphony Hall',
      description: 'An evening of classical masterpieces performed by the city orchestra.',
      image: '/images/classical.jpg',
      seats: Array.from({ length: 100 }, (_, i) => ({
        id: `seat-${i + 1}`,
        row: String.fromCharCode(65 + Math.floor(i / 10)),
        number: (i % 10) + 1,
        price: 40,
        status: 'available' as const
      }))
    },
    {
      id: 3,
      title: 'Live Band Concert',
      date: '2024-09-10',
      location: 'City Hall',
      description: 'Experience the best local bands live!',
      image: '/images/live-band.jpg',
      seats: Array.from({ length: 100 }, (_, i) => ({
        id: `seat-${i + 1}`,
        row: String.fromCharCode(65 + Math.floor(i / 10)),
        number: (i % 10) + 1,
        price: 60,
        status: 'available' as const
      }))
    }
  ]);

  const handleBookNow = (event: Event) => {
    const params = new URLSearchParams();
    params.set('title', event.title);
    params.set('date', event.date);
    params.set('location', event.location);
    params.set('description', event.description);
    params.set('image', event.image);
    
    router.push(`/events/${event.id}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <CirclePattern />
      <h1>Upcoming Events</h1>
      <div className={styles.events}>
        {events.map(event => (
          <div key={event.id} className={styles.eventCard}>
            <div 
              className={styles.eventImage}
              style={{ backgroundImage: `url(${event.image})` }}
            />
            <div className={styles.eventInfo}>
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
              <button 
                className={styles.bookButton}
                onClick={() => handleBookNow(event)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className={styles.container}>Loading...</div>}>
      <EventsContent />
    </Suspense>
  );
} 