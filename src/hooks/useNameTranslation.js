import { useState, useEffect } from 'react';

const translations = [
  { language: 'Japanese', text: 'ビンウィン ヴィジュ' },
  { language: 'Chinese', text: '宾温 维朱' },
  { language: 'Hindi', text: 'बिनविन विजू' },
  { language: 'Arabic', text: 'بينوين فيجو' },
  { language: 'Russian', text: 'Бинвин Виджу' },
  { language: 'Greek', text: 'Μπίνγουιν Βίτζου' },
  { language: 'English', text: 'Binwin Viju' }
];

const useNameTranslation = (duration = 3000) => {
  const [displayText, setDisplayText] = useState(translations[0].text);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timePerTranslation = duration / translations.length;
    let currentIndex = 0;

    const animationInterval = setInterval(() => {
      currentIndex++;
      
      if (currentIndex >= translations.length) {
        clearInterval(animationInterval);
        setIsAnimating(false);
        return;
      }

      setDisplayText(translations[currentIndex].text);
    }, timePerTranslation);

    return () => {
      clearInterval(animationInterval);
    };
  }, [duration]);

  return { displayText, isAnimating };
};

export default useNameTranslation;
