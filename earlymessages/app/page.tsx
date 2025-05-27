'use client';
import styles from './globals.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  const ballControls = useAnimation();
  const batControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await ballControls.start({ x: '36vw', y: 0, transition: { duration: 0.8, ease: 'easeIn' } });
        await batControls.start({ rotate: -10, transition: { duration: 0.15 } });
        await Promise.all([
          ballControls.start({ x: '80vw', y: '-40vw', scale: 1.2, opacity: 0, transition: { duration: 0.7, ease: 'easeOut' } }),
          batControls.start({ rotate: -30, transition: { duration: 0.2 } }),
        ]);
        await ballControls.start({ x: '-30vw', y: 0, scale: 1, opacity: 1, transition: { duration: 0 } });
        await new Promise(res => setTimeout(res, 500));
      }
    };
    sequence();
  }, [ballControls, batControls]);

  return (
    <div className={styles.container}>
      {/* Decorative pitch background */}
      <div className={styles.backgroundPitch}></div>
      {/* Floating cricket ball */}
      <div className={styles.floatingBall}>
        <svg viewBox="0 0 40 40" width="100%" height="100%">
          <circle cx="20" cy="20" r="16" fill="#e74c3c" stroke="#fff" strokeWidth="3"/>
          <ellipse cx="20" cy="20" rx="12" ry="3" fill="#fff8" transform="rotate(-20 20 20)" />
        </svg>
      </div>
      {/* Floating cricket bat */}
      <div className={styles.floatingBat}>
        <svg viewBox="0 0 60 200" width="100%" height="100%">
          <rect x="22" y="10" width="16" height="50" rx="8" fill="#b48a4a" stroke="#8d6e3c" strokeWidth="3"/>
          <rect x="10" y="60" width="40" height="120" rx="12" fill="#e0c097" stroke="#b48a4a" strokeWidth="4"/>
          <rect x="18" y="70" width="8" height="100" rx="4" fill="#fff2" />
        </svg>
      </div>
      <h2 className={styles.welcome}>Welcome to GroundsHunt</h2>
      <div className={styles.cricketScene}>
        {/* Bat SVG */}
        <motion.div
          className={styles.bat}
          animate={batControls}
          initial={{ rotate: -30 }}
          style={{ originX: 0.15, originY: 0.8 }}
        >
          <svg viewBox="0 0 60 200" width="60" height="200" style={{ display: 'block' }}>
            <rect x="22" y="10" width="16" height="50" rx="8" fill="#b48a4a" stroke="#8d6e3c" strokeWidth="3"/>
            <rect x="10" y="60" width="40" height="120" rx="12" fill="#e0c097" stroke="#b48a4a" strokeWidth="4"/>
            <rect x="18" y="70" width="8" height="100" rx="4" fill="#fff2" />
          </svg>
        </motion.div>
        {/* Ball SVG */}
        <motion.div
          className={styles.ball}
          animate={ballControls}
          initial={{ x: '-30vw', y: 0, scale: 1, opacity: 1 }}
        >
          <svg viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="16" fill="#e74c3c" stroke="#fff" strokeWidth="3"/>
            <ellipse cx="20" cy="20" rx="12" ry="3" fill="#fff8" transform="rotate(-20 20 20)" />
            <ellipse cx="20" cy="20" rx="12" ry="3" fill="#fff4" transform="rotate(20 20 20)" />
          </svg>
        </motion.div>
        {/* Ball shadow */}
        <div className={styles.ballShadow}></div>
      </div>
      <h1 className={styles.comingSoon}>Coming Soon</h1>
    </div>
  );
}
