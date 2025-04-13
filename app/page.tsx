'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import RecordPlayer from './components/RecordPlayer';
import MusicPlayer from './components/MusicPlayer';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const mainBtnWrapperRef = useRef<HTMLDivElement>(null);
  const btnPlayRef = useRef<HTMLElement>(null);
  const btnPauseRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Set mounted state immediately
    setIsMounted(true);

    // Import dependencies
    const loadDependencies = async () => {
      const [{ default: $ }, gsap] = await Promise.all([
        import('jquery'),
        import('gsap')
      ]);
      
      window.$ = $;
      window.TweenMax = gsap.TweenMax;
      window.TimelineMax = gsap.TimelineMax;
      window.Power2 = gsap.Power2;
      window.Expo = gsap.Expo;
      window.Elastic = gsap.Elastic;
      
      setGsapLoaded(true);
    };

    loadDependencies();

    return () => {
      setIsMounted(false);
      setGsapLoaded(false);
    };
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !isMounted) return;

    const $ = window.$;
    const { TweenMax, TimelineMax, Power2, Expo, Elastic } = window;

    // Reset element states
    if (waveRef.current) {
      $(waveRef.current).css({ opacity: 0, scale: 0 });
    }
    $('.listen-image').css({ opacity: 0, scale: 0 });
    $('.recordPlayer').css({ opacity: 0, scale: 0 });
    if (textRef.current) {
      $(textRef.current).css({ opacity: 0, y: 100 });
    }

    // Initialize animations
    const tl = new TimelineMax();
    
    tl.to('.listen-image', 1, {
      scale: 1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.15)
    })
    .to('.recordPlayer', 1, {
      scale: 1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.75)
    })
    .to(waveRef.current, 1.5, {
      scale: 1,
      opacity: 1,
      ease: Expo.easeOut
    })
    .to(textRef.current, 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeOut
    }, '-=0.5');

  }, [gsapLoaded, isMounted]);

  const handleBurgerClick = () => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    if (navRef.current && dimRef.current && backBtnRef.current) {
      $(navRef.current).fadeIn(300);
      $(dimRef.current).fadeIn(300);
      $(backBtnRef.current).fadeIn(300);
    }
  };

  const handleBackClick = () => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    if (navRef.current && dimRef.current && backBtnRef.current) {
      $(navRef.current).fadeOut(300);
      $(dimRef.current).fadeOut(300);
      $(backBtnRef.current).fadeOut(300);
    }
  };

  const handleDimClick = () => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    if (navRef.current && dimRef.current && backBtnRef.current && playerRef.current) {
      $(navRef.current).fadeOut(300);
      $(dimRef.current).fadeOut(300);
      $(backBtnRef.current).fadeOut(300);
      $(playerRef.current).fadeOut(300);
    }
  };

  const handlePlayToggle = () => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    setIsPlaying(!isPlaying);
    if (mainBtnWrapperRef.current) {
      $(mainBtnWrapperRef.current).toggleClass('playing');
    }
    $('.mini-player_btn_wrapper').toggleClass('playing');
    $('.btn-switch').toggleClass('playing');
  };

  const handleOpenPlayer = () => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    if (playerRef.current && dimRef.current) {
      $(playerRef.current).fadeIn(300);
      $(dimRef.current).fadeIn(300);
    }
  };

  const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    $('.list_item').removeClass('selected');
    $(e.currentTarget).addClass('selected');
  };

  const handleTextClick = () => {
    if (!isMounted || !window.$ || !window.TweenMax || !window.Power2) return;
    const $ = window.$;
    const { TweenMax, Power2 } = window;
    if (mainBtnWrapperRef.current) {
      $(mainBtnWrapperRef.current)
        .fadeIn(300)
        .css('display', 'flex');
      TweenMax.to($(mainBtnWrapperRef.current), 0.3, {
        scale: 1,
        opacity: 1,
        ease: Power2.easeOut
      });
    }
  };

  const handleNavClick = (path: string) => {
    if (!isMounted || !window.$) return;
    const $ = window.$;
    router.push(path);
    if (navRef.current && dimRef.current && backBtnRef.current) {
      $(navRef.current).fadeOut(300);
      $(dimRef.current).fadeOut(300);
      $(backBtnRef.current).fadeOut(300);
    }
  };

  return (
    <>
      {isMounted && <MusicPlayer isPlaying={isPlaying} onPlayToggle={handlePlayToggle} />}
      <div className="wave-container" ref={waveRef}>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <div className="wrapper">
        <div className="line"></div>
        <div className="text-wrap">
          <div className="text" ref={textRef} onClick={handleTextClick}>
            <img src="/LOGO.png" alt="LISTEN" className="listen-image" />
            <div className="main-btn_wrapper" ref={mainBtnWrapperRef}>
              {isMounted && (
                <>
                  <i 
                    className="main-btn fa fa-play" 
                    aria-hidden="true" 
                    onClick={handlePlayToggle} 
                    style={{ display: isPlaying ? 'none' : 'block' }}
                  />
                  <i 
                    className="main-btn fa fa-pause" 
                    aria-hidden="true" 
                    onClick={handlePlayToggle} 
                    style={{ display: isPlaying ? 'block' : 'none' }}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {isMounted && <RecordPlayer />}

        <div className="header">
          <div className="burger-wrapper" onClick={handleBurgerClick}>
            <div className="burger"></div>
          </div>
          <div className="back_btn" ref={backBtnRef} onClick={handleBackClick}>
            <div className="circle"></div>
            <div className="text">Back</div>
          </div>
        </div>

        <div className="nav" ref={navRef}>
          <ul className="nav_main">
            <li><a className="nav_link" onClick={() => handleNavClick('/')}>Home</a></li>
            <li><a className="nav_link" onClick={() => handleNavClick('/events')}>Events</a></li>
          </ul>
          <div className="nav_divider"></div>
          <ul className="nav_sub">
            <li><a className="nav_link" onClick={() => handleNavClick('/about')}>About</a></li>
            {/* <li><a className="nav_link">Contact</a></li> */}
          </ul>
        </div>

        <div className="mini-player">
          <div className={`mini-player_btn_wrapper ${isPlaying ? 'playing' : ''}`}>
            {/* <i style={{marginTop: '100px'}}className="btn-open-player fa fa-list" aria-hidden="true" onClick={handleOpenPlayer}></i> */}
          </div>
        </div>

        <div className="dim" ref={dimRef} onClick={handleDimClick}></div>
        <div className="player" id="player" ref={playerRef}>
          <div className="playback_wrapper">
            <div className="playback_blur"></div>
            <div className="playback_thumb"></div>
            <div className="playback_info">
              <div className="title">Friday Comes</div>
              <div className="artist">Early</div>
            </div>
            <div className="playback_btn_wrapper">
              <i className="btn-prev fa fa-step-backward" aria-hidden="true"></i>
              <div className="btn-switch">
                <i className="btn-play fa fa-play" aria-hidden="true" onClick={handlePlayToggle}></i>
                <i className="btn-pause fa fa-pause" aria-hidden="true" onClick={handlePlayToggle}></i>
              </div>
              <i className="btn-next fa fa-step-forward" aria-hidden="true"></i>
            </div>
            <div className="playback_timeline">
              <div className="playback_timeline_start-time">00:31</div>
              <div className="playback_timeline_slider">
                <div className="slider_base"></div>
                <div className="slider_progress"></div>
                <div className="slider_handle"></div>
              </div>
              <div className="playback_timeline_end-time">03:11</div>
            </div>
          </div>

          <div className="list_wrapper">
            <ul className="list">
              <li className="list_item selected" onClick={handleListItemClick}>
                <div className="thumb"></div>
                <div className="info">
                  <div className="title">Friday Comes</div>
                  <div className="artist">Early</div>
                </div>
              </li>
              <li className="list_item" onClick={handleListItemClick}>
                <div className="thumb"></div>
                <div className="info">
                  <div className="title">Friday Comes</div>
                  <div className="artist">Early</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isMounted && <Script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" />}
    </>
  );
}
