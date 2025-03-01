import { useEffect, useState } from "react"
import { getPosts } from "../api"


export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts()
      setPosts(data)
    }

    loadPosts()
  }, [])

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.dateCreated}</p>
          </>
        )
      })}
    </>
  )
}
