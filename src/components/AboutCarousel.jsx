import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight, IconPause, IconPlay } from './Icons';

export default function AboutCarousel({ images = [], autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = images.length;

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying || isHovered || total <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, total, autoPlayInterval, handleNext]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="about-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Jesus College and MCR photo gallery"
    >
      <div className="about-carousel-track">
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`about-carousel-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={img.src}
                alt={img.alt || img.title || `Slide ${idx + 1}`}
                className="about-carousel-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      <div className="about-carousel-controls">
        <button
          type="button"
          className="about-carousel-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <IconChevronLeft size={22} />
        </button>

        <button
          type="button"
          className="about-carousel-nav-btn next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <IconChevronRight size={22} />
        </button>
      </div>

      <div className="about-carousel-overlay">
        <div className="about-carousel-caption-content">
          <div className="about-carousel-header">
            <span className="about-carousel-badge">
              {currentIndex + 1} / {total}
            </span>
            <button
              type="button"
              className="about-carousel-play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <IconPause size={14} /> : <IconPlay size={14} />}
            </button>
          </div>

          <h3 className="about-carousel-title">
            {images[currentIndex].title}
          </h3>
          {images[currentIndex].subtitle && (
            <p className="about-carousel-subtitle">
              {images[currentIndex].subtitle}
            </p>
          )}
        </div>

        <div className="about-carousel-dots" role="tablist" aria-label="Slide indicators">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${img.title || ''}`}
                className={`about-carousel-dot ${isActive ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
