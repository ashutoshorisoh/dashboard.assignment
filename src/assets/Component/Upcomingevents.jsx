import React from 'react';
import { Calendar } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      title: "Tech Conference 2024",
      date: "March 15, 2024",
      location: "Kolkata, West Bengal",
    },
    {
      title: "Job Fair",
      date: "April 10, 2024",
      location: "Online - Zoom",
    },
    {
      title: "Team Building Retreat",
      date: "May 20, 2024",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4 font-mono">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-green-200">
            <Calendar size={24} className="text-green-600 mr-2" />
            <div>
              <h3 className="font-semibold font-mono ">{event.title}</h3>
              <p className="text-gray-600 font-mono">{event.date}</p>
              <p className="text-gray-500 text-sm font-mono">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
