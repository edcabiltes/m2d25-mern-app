import { useEffect, useState } from "react"
import { getPosts } from "../api"
import BlogCard from "../components/BlogCard"


export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts()
      data.sort((d1, d2) => new Date(d2.dateCreated).getTime() - new Date(d1.dateCreated).getTime()) 
      setPosts(data)
    }

    loadPosts()
  }, [])

  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <BlogCard post={post} />
        )
      })}
    </div>
  )
}
