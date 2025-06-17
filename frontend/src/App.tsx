import './App.css'
import { useEffect, useState } from 'react';
import type { User } from "@common/user";


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
