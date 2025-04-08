'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function Events() {
  const router = useRouter();
  const [events] = useState([
    {
      id: 1,
      title: 'Summer Music Festival',
      date: 'June 15, 2024',
      location: 'Central Park',
      description: 'Join us for a day of amazing music and performances',
      image: '/event1.jpg'
    },
    {
      id: 2,
      title: 'DJ Night',
      date: 'July 1, 2024',
      location: 'Club Atmosphere',
      description: 'Experience the best electronic music with our top DJs',
      image: '/event2.jpg'
    },
    {
      id: 3,
      title: 'Live Band Concert',
      date: 'July 15, 2024',
      location: 'City Arena',
      description: 'A night of live music featuring local bands',
      image: '/event3.jpg'
    }
  ]);

  return (
    <div className="events-page">
      <div className="events-content">
        <div className="events-header">
          <button className="back-button" onClick={() => router.push('/')}>
            Back to Home
          </button>
          <h1>Upcoming Events</h1>
        </div>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image" style={{ 
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}></div>
              <div className="event-content">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <button 
                  className="event-button"
                  onClick={() => router.push(`/events/${event.id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pattern-container">
        <span style={{"--x": 5, "--y": 0, "--r": "0deg"} as any}></span>
        <span style={{"--x": 2, "--y": 2, "--r": "0deg"} as any}></span>
        <span style={{"--x": 4, "--y": 2, "--r": "0deg"} as any}></span>
        <span style={{"--x": 6, "--y": 2, "--r": "180deg"} as any}></span>
        <span style={{"--x": 1, "--y": 3, "--r": "180deg"} as any}></span>
        <span style={{"--x": 3, "--y": 3, "--r": "0deg"} as any}></span>
        <span style={{"--x": 5, "--y": 3, "--r": "180deg"} as any}></span>
        <span style={{"--x": 2, "--y": 4, "--r": "180deg"} as any}></span>
        <span style={{"--x": 3, "--y": 4, "--r": "0deg"} as any}></span>
        <span style={{"--x": 5, "--y": 4, "--r": "0deg"} as any}></span>
        <span style={{"--x": 2, "--y": 5, "--r": "0deg"} as any}></span>
        <span style={{"--x": 4, "--y": 5, "--r": "180deg"} as any}></span>
        <span style={{"--x": 6, "--y": 5, "--r": "180deg"} as any}></span>
        <span style={{"--x": 3, "--y": 6, "--r": "180deg"} as any}></span>
        <span style={{"--x": 5, "--y": 6, "--r": "180deg"} as any}></span>
        <span style={{"--x": 2, "--y": 7, "--r": "0deg"} as any}></span>
        <span style={{"--x": 4, "--y": 7, "--r": "180deg"} as any}></span>
        <span style={{"--x": 5, "--y": 7, "--r": "0deg"} as any}></span>
        <span style={{"--x": 3, "--y": 8, "--r": "0deg"} as any}></span>
        <span style={{"--x": 4, "--y": 8, "--r": "0deg"} as any}></span>
        <span style={{"--x": 6, "--y": 8, "--r": "180deg"} as any}></span>
        <span style={{"--x": 5, "--y": 9, "--r": "180deg"} as any}></span>
      </div>
    </div>
  );
} 