import { useState, useEffect } from 'react';
import './GokuScrollHint.css';

const GokuScrollHint = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > window.innerHeight * 0.45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`goku-hint-container${hidden ? ' goku-hint-hidden' : ''}`}>
      <div className="goku-speech-bubble">
        Scroll down to view more about me! ↓
      </div>

      <div className="goku-sprite">
        {/* Aura layers (behind character) */}
        <div className="goku-aura aura-1"></div>
        <div className="goku-aura aura-2"></div>

        {/* Spiky hair */}
        <div className="goku-hair">
          <div className="hair-s1"></div>
          <div className="hair-s2"></div>
          <div className="hair-s3"></div>
          <div className="hair-s4"></div>
          <div className="hair-s5"></div>
        </div>

        {/* Face */}
        <div className="goku-head">
          <div className="goku-eye goku-eye-l"></div>
          <div className="goku-eye goku-eye-r"></div>
          <div className="goku-smile"></div>
        </div>

        {/* Orange Gi */}
        <div className="goku-gi">
          <span className="gi-kanji">武</span>
        </div>
      </div>

      <div className="goku-scroll-arrow">▼</div>
    </div>
  );
};

export default GokuScrollHint;
