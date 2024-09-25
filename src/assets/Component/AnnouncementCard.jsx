import React from 'react';
import { Pin } from 'lucide-react';

const AnnouncementCard = () => {
  const announcements = [
    {
      title: "Upcoming Event: Tech Conference 2024",
      description: "Join us for the annual Tech Conference where industry leaders will discuss the future of technology.",
    },
    {
      title: "Holiday Closure Notification",
      description: "Our offices will be closed from December 24th to January 1st for the holiday season.",
    },
    {
      title: "New Policy Implementation",
      description: "Please review the updated company policies effective from next month.",
    },
    {
      title: "Team Building Activity",
      description: "Don't miss our team-building event on November 15th. RSVP by next week!",
    },
    {
      title: "Weekly Newsletter",
      description: "Check out this week's newsletter for updates and highlights from our team.",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4 font-mono">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-200">
            <div>
              <h3 className="text-lg font-semibold font-mono">{announcement.title}</h3>
              <p className="text-gray-600 font-mono">{announcement.description}</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <Pin size={24} className="text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
