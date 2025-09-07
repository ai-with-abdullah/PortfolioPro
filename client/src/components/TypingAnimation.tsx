import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypingAnimation({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000, 
  className = "" 
}: TypingAnimationProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText !== '') {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
}