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
  const armRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.gsap = gsap;
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !recordRef.current || !armRef.current) return;

    const tl = window.gsap.timeline({ repeat: -1 });
    tl.to(recordRef.current, {
      rotate: 360,
      duration: 1,
      ease: 'none',
    });

    const armTl = window.gsap.timeline({ repeat: -1 });
    armTl.to(armRef.current, {
      rotate: 30,
      duration: 0.5,
      ease: 'power2.inOut',
    })
    .to(armRef.current, {
      rotate: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    return () => {
      tl.kill();
      armTl.kill();
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className={styles.recordPlayer}>
      <div className={styles.record} ref={recordRef}>
        <div className={styles.recordLabel}></div>
      </div>
      {/* <div className={styles.arm} ref={armRef}> */}
        {/* <div className={styles.needle}></div> */}
      {/* </div> */}
    </div>
  );
} 