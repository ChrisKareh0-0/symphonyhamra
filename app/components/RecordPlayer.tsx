'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './RecordPlayer.module.css';
import gsap from 'gsap';

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}

export default function RecordPlayer() {
  const recordRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.gsap = gsap;
    setIsMounted(true);
  }, []);

  const handleRecordClick = () => {
    if (!isMounted) return;
    
    setIsPlaying(true);
    const tl = window.gsap.timeline();
    
    // Hide listen-image
    tl.to('.listen-image', {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    // Hide waves
    .to('.wave-container', {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.3')
    // Change background color
    .to('.wrapper', {
      backgroundColor: '#1a472a',
      duration: 1,
      ease: 'power2.inOut'
    }, '-=0.3')
    // Move and scale up record player to center
    .to(recordRef.current, {
      top: '50%',
      right: '50%',
      xPercent: 50,
      scale: 1.2,
      duration: 0.8,
      ease: 'power2.inOut'
    })
    // Show back button
    .to(`.${styles.backButton}`, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => setShowBackButton(true)
    });
  };

  const handleBackClick = () => {
    if (!isMounted) return;
    
    setShowBackButton(false);
    const tl = window.gsap.timeline();
    
    // Hide back button
    tl.to(`.${styles.backButton}`, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.inOut'
    })
    // Move and scale down record player to original position
    .to(recordRef.current, {
      top: '45%',
      right: '36%',
      xPercent: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.inOut'
    })
    // Restore background color
    .to('.wrapper', {
      backgroundColor: 'var(--color-bg)',
      duration: 1,
      ease: 'power2.inOut'
    })
    // Show waves
    .to('.wave-container', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    // Show listen-image
    .to('.listen-image', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => setIsPlaying(false)
    });
  };

  if (!isMounted) return null;

  return (
    <>
      <div 
        className={`${styles.recordPlayer} ${isPlaying ? styles.playing : ''}`} 
        onClick={handleRecordClick}
        ref={recordRef}
      >
        <div className={styles.record}>
          <div className={styles.grooves}></div>
          <div className={styles.recordLabel}>
            {/* <img src="/images/dont-care-album.jpg" alt="Album Art" /> */}
          </div>
        </div>
      </div>
      {showBackButton && (
        <button 
          className={styles.backButton}
          onClick={handleBackClick}
        >
          Back
        </button>
      )}
    </>
  );
} 