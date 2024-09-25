import React from 'react';
import { Clock } from 'lucide-react';

const RecentActivities = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4 font-mono">Recent Activities</h2>
      <div className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-red-200">
        <Clock size={24} className="text-blue-600 mr-2" />
        <div>
          <h3 className="font-semibold font-mono">Posted a new job</h3>
          <p className="text-gray-600 font-mono">Software Engineer position - Apply now!</p>
          <p className="text-gray-500 text-sm font-mono">2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
