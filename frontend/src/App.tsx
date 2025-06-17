import type { User } from '@types/user'; // ✅ Correct: named import from index.ts

import './App.css'
import { useEffect, useState } from 'react';


function App() {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`)
    const data = await response.json();
    setUser(data)
    //console.log(data);
  }

  return (
    <>
      <h1>{user?.email}</h1>
    </>
  )
}

export default App
