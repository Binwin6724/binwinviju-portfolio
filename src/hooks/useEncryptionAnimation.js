import { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const useEncryptionAnimation = (finalText, duration = 1500) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!finalText) return;

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      if (percentage === 1) {
        setDisplayText(finalText);
        setIsAnimating(false);
        return;
      }

      let result = '';
      for (let i = 0; i < finalText.length; i++) {
        if (finalText[i] === ' ') {
          result += ' ';
        } else if (i < finalText.length * percentage) {
          result += finalText[i];
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplayText(result);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [finalText, duration]);

  return { displayText, isAnimating };
};

export default useEncryptionAnimation;
