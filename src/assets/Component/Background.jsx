import React from 'react';
import Card from './Card';
import Card2 from './Card2';
import { Search } from 'lucide-react';
import AnnouncementCard from './AnnouncementCard';
import RecentActivities from './RecentActivity';
import UpcomingEvents from './Upcomingevents';
import { Bell, MessageSquare, UserRound, ChevronDown } from 'lucide-react';
function Background() {
  return (
    <div className='lg:w-[84vw] md:w-[776px] md:bg-red   md:fixed md:left-0 md:top-0 w-[400px] h-full ml-[215px]'>
      <div className='lg:ml-20 md:ml-10 sm:ml-2 mt-5 '>
        <div className=' flex justify-between lg:w-full w-[630px] p-4 rounded-lg shadow  '>
          <div className='flex items-center  '>
            <input
              type="text"
              placeholder='Search...'
              className='flex h-[40px] px-4 text-gray-700 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100'
            />
            <button className=' text-black border border-gray-300 h-[40px] w-[50px] rounded-r-md flex items-center justify-center hover:bg-gray-200 transition'>
              <Search />
            </button>
            
          </div>
          <div className='flex flex-row gap-5 justify-center items-center'>
          <button className='hover:text-red-600'><Bell/></button>
          <button className='hover:text-red-600'><MessageSquare/></button>
          <button className='hover:text-red-600'><UserRound/></button>
          <div className='flex gap-1 justify-center items-center'>
          <button className='hover:text-red-600'><h2>User 123</h2></button>
          <button className='hover:text-red-600'><ChevronDown/></button>
          </div>
          
          </div>
          
        </div>
        
        <div className='mt-5 ml-5'>
          <h1 className='lg:text-2xl md:text-xl sm:text-lg font-extrabold font-mono'>Dashboard</h1>
        </div>
        
        <div className='flex lg:flex-row flex-col mt-[-18px]'>
          <div className='flex lg:flex-row md:flex-row sm:flex-col w-[640px] flex-wrap gap-10 p-5'>
            <div className='w-[28%]'>
              <Card head={<span className='font-mono'>Available Position</span>} number={<span className='font-mono'>24</span>} below={<span className='font-mono'>4 people needed</span>} />
            </div>
            <div className='w-[28%]'>
              <Card head={<span className='font-mono'>Job Open</span>} number={<span className='font-mono'>14</span>} below={<span className='font-mono'>2 active hiring</span>} />
            </div>
            <div className='w-[28%]'>
              <Card head={<span className='font-mono'>New Employees</span>} number={<span className='font-mono'>6</span>} below={<span className='font-mono'>2 departments</span>} />
            </div>

            <div className='flex justify-start w-[640px] gap-2 flex-wrap'>
              <div className='w-[285px]'>
                <Card2 lgContent={<span className='font-mono'>Total Employees</span>} xlContent={<span className='font-mono'>216</span>} smContent={<span className='font-mono'>120 men 96 women</span>} imageSrc='https://atlas-content-cdn.pixelsquid.com/stock-images/arrow-graph-up-line-chart-vnZX8EB-600.jpg' />
              </div>
              <div className='w-[285px]'>
                <Card2 lgContent={<span className='font-mono'>Total Requests</span>} xlContent={<span className='font-mono'>116</span>} smContent={<span className='font-mono'>80 men 36 women </span>} imageSrc='https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-stats-business-graph-png-image_5705173.png' />
              </div>
            </div>

            <div>
              <AnnouncementCard />
            </div>
          </div>

          <div className='flex flex-col ml-1 mt-5 p-5 '>
            <div className='lg:w-[427px] w-[600px] h-[288px] lg:mt-[-20px] flex flex-col gap-2'>
              <RecentActivities></RecentActivities>
              <UpcomingEvents></UpcomingEvents>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
