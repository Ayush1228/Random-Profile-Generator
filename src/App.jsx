import { useEffect, useState } from 'react'
import { getRandomUser } from './api'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [userData, setUserData] = useState(null);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, [])

  console.log(userData);
  return (
    <div className='App'>
      {userData && <UserCard data = {userData} refresh={refresh}></UserCard>}
    </div>
  )
}

export default App
