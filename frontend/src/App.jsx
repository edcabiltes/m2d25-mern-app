import { useEffect, useState } from 'react'
import { getPosts, getPost, createPost, updatedPost, deletePost} from './api'
import './App.css'

function App() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    async function loadAllPosts() {
      let data = await getPosts()
      if (data) {
        setPosts(data)
      }
    }

    loadAllPosts()
  }, [])

  return (
    <>
      {JSON.stringify(posts)}
    </>
  )
}

export default App
