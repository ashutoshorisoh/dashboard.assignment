import React from 'react';
import Button from './Button';
import { LayoutDashboard, UserPlus, CalendarCheck, Users, Boxes, HandHelping, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <div className='lg:w-[242px] md:w-[40px] ipadpro:w-[20vw] sm:md-[10px] lg:h-[900px] ipadpro:h-full bg-blue-200 p-10 fixed top-0 h-full'>
      <div className='mb-10 flex justify-center'>
        <img
          src='https://cdn-icons-png.freepik.com/256/2801/2801829.png?semt=ais_hybrid'
          alt='Recruitment Icon'
          className='w-16 h-16'
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='mb-[-10px] text-lg text-center font-bold font-mono'>MAIN MENU</h1>
        <Button icon={<LayoutDashboard className='md:ml-5 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Dashboard</span>} />
        <Button icon={<UserPlus className='md:ml-5 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Recruitment</span>} />
        <Button icon={<CalendarCheck className='md:ml-5 sm:ml-2 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Schedule</span>} />
        <Button icon={<Users className='md:ml-5 sm:ml-2 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Employee</span>} />
        <Button icon={<Boxes className='md:ml-5 sm:ml-2 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Department</span>} />
      </div>
      <div className='flex flex-col gap-5 mt-10'>
        <h1 className='mb-[-10px] text-lg font-bold font-mono text-center '>OTHER</h1>
        <Button icon={<HandHelping className='md:ml-5 sm:ml-2 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Support</span>} />
        <Button icon={<Settings className='md:ml-5 sm:ml-2 lg:ml-0 ml-6' />} head={<span className='font-mono flex items-center'>Settings</span>} />
      </div>
    </div>
  );
}

export default Sidebar;
