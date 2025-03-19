import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const CountdownEventSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date for the countdown
  const targetDate = new Date('2025-04-10T00:00:00');

  // Update the countdown timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when it reaches 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
      <SectionTitle
          heading="Upcoming Event"
          subHeading="Join Our Wedding Expo"
        />
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-200 text-pink-500 rounded-lg shadow-xl p-6 md:p-12">
          <h3 className="text-2xl font-semibold mb-4">Wedding Expo 2025</h3>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono">{timeLeft.days}</span>
              <span className="text-lg">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono">{timeLeft.hours}</span>
              <span className="text-lg">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono">{timeLeft.minutes}</span>
              <span className="text-lg">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono">{timeLeft.seconds}</span>
              <span className="text-lg">Seconds</span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-lg text-gray-600">
          Don't miss the biggest wedding expo of the year! Mark your calendars now!
        </p>
      </div>
    </div>
  );
};

export default CountdownEventSection;
