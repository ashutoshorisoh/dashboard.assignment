import { useState } from 'react'
import Sidebar from './assets/Component/Sidebar'
import Background from './assets/Component/Background'
import { Search } from 'lucide-react'
import AnnouncementCard from './assets/Component/AnnouncementCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row'>
      <Sidebar></Sidebar>
      <Background></Background>
  
    </div>
  )
}

export default App
