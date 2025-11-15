import { useEffect, useState } from 'react'
import { getPosts, getRandomUser } from './api'
import './App.css'
import PostCard from './components/PostCard'
import UserCard from './components/UserCard'

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, [])

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, [])

  console.log(userData);
  return (
    <div className='App'>
      {userData && <UserCard data = {userData} refresh={refresh}></UserCard>}
      <h3>Dummy Data from JSONPLACEHOLDER API </h3>
      {
        data ? data.map((e,i) => <PostCard key={i} title={e.title} body={e.body}></PostCard>) : <p>No data</p>
      }
    </div>
  )
}

export default App
