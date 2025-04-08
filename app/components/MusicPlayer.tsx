'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../styles/MusicPlayer.module.css';

interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Orchestra",
    artist: "Yuka Kitamura",
    cover: "/images/Song01.jpg",
    audioUrl: "/audio/Elden Ring - Main Theme OST Official Soundtrack Music.mp3"
  },
  {
    id: 2,
    title: "Godrick the Grafted",
    artist: "Yuka Kitamura",
    cover: "/images/elden-ring-cover.jpg",
    audioUrl: "/audio/elden-ring-godrick.mp3"
  }
];

export default function MusicPlayer({ isPlaying, onPlayToggle }: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSongEnd = () => {
    playNext();
  };

  const currentSong = songs[currentSongIndex];
  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className={styles.musicPlayer}>
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
      
      <div className={styles.playerContent}>
        <div className={styles.coverArt}>
          <img src={currentSong.cover} alt={currentSong.title} />
        </div>

        <div className={styles.songInfo}>
          <div className={styles.songTitle}>{currentSong.title}</div>
          <div className={styles.artist}>{currentSong.artist}</div>
        </div>

        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={playPrevious}>
            <i className="fas fa-step-backward"></i>
          </button>
          
          <button className={styles.controlButton} onClick={onPlayToggle}>
            <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
          </button>
          
          <button className={styles.controlButton} onClick={playNext}>
            <i className="fas fa-step-forward"></i>
          </button>
        </div>

        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }}
          />
          <div className={styles.timeInfo}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 