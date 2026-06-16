import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicles } from '../../data/vehicles';

export default function VehicleShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(vehicles.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const startIndex = currentIndex * itemsPerView;
  const visibleVehicles = vehicles.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-pt-cream">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <p className="section-eyebrow">Our Fleet</p>
          <h2 className="font-display text-4xl sm:text-5xl text-pt-deep mb-4 leading-snug">
            Choose Your Perfect Ride
          </h2>
          <p className="mx-auto max-w-2xl text-pt-muted text-base leading-relaxed">
            Travel across Sikkim in comfort, style, and confidence with our well-maintained fleet of vehicles.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {vehicles
                      .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                      .map((vehicle, idx) => (
                        <div
                          key={vehicle.id}
                          className={`reveal reveal-delay-${idx % 3 + 1} group`}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="vehicle-card relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-500 hover:border-pt-gold/30 hover:shadow-[0_30px_80px_rgba(201,168,76,0.15)] hover:-translate-y-2">
                            {/* Background gradient */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${vehicle.bgGradient} opacity-40 transition-opacity duration-500 group-hover:opacity-50`}
                            />

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,168,76,0.2),_transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                              {/* Vehicle Type Badge */}
                              <div className="mb-4">
                                <span className="inline-flex items-center rounded-full bg-pt-gold/20 px-3 py-1 text-xs font-semibold text-pt-gold border border-pt-gold/30">
                                  {vehicle.type}
                                </span>
                              </div>

                              {/* Vehicle Name */}
                              <h3 className="font-display text-2xl text-pt-deep font-bold mb-6 group-hover:text-pt-gold transition-colors duration-300">
                                {vehicle.name}
                              </h3>

                              {/* Details Grid */}
                              <div className="space-y-3 mb-6 flex-1">
                                <div className="flex items-center gap-3 text-sm text-pt-slate">
                                  <span className="text-lg">👨‍✈️</span>
                                  <span>{vehicle.driver ? 'Professional Driver Included' : 'Self-Drive Available'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-pt-slate">
                                  <span className="text-lg">👥</span>
                                  <span>{vehicle.seating} Seating Capacity</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-pt-slate">
                                  <span className="text-lg">💰</span>
                                  <span className="font-semibold text-pt-gold">Starting from ₹{vehicle.dailyRate.toLocaleString('en-IN')}/day</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-pt-slate">
                                  <span className="text-lg">📍</span>
                                  <span>{vehicle.idealFor.join(', ')}</span>
                                </div>
                              </div>

                              {/* Rating */}
                              <div className="mb-5 flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={14}
                                      className={i < Math.round(vehicle.rating) ? 'fill-pt-gold text-pt-gold' : 'text-pt-muted/30'}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs font-semibold text-pt-deep">
                                  {vehicle.rating} ({vehicle.reviews} reviews)
                                </span>
                              </div>

                              {/* CTA Button */}
                              <Link
                                to="/contact"
                                className="btn-primary w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pt-gold to-pt-gold-light px-4 py-3 text-sm font-semibold text-pt-deep shadow-[0_12px_30px_rgba(201,168,76,0.3)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(201,168,76,0.4)] hover:-translate-y-0.5"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 rounded-full bg-pt-deep/90 p-3 text-pt-gold shadow-lg transition-all duration-300 hover:bg-pt-deep hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 sm:translate-x-8 rounded-full bg-pt-deep/90 p-3 text-pt-gold shadow-lg transition-all duration-300 hover:bg-pt-deep hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'h-3 w-10 bg-pt-gold shadow-[0_4px_12px_rgba(201,168,76,0.4)]'
                  : 'h-3 w-3 bg-pt-muted/40 hover:bg-pt-muted/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
