import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPost } from "../api"


export default function ReadBlog() {
  const [post, setPost] = useState({})

  let params = useParams()
  const navigate = useNavigate()
  let id = params.id

  useEffect(() => {
    async function loadPost() {
      const data = await getPost(id)
      let date = new Date(data.dateCreated)
      data.dateCreated = date.toString()
      setPost(data)
    }

    loadPost()
  }, [])

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.dateCreated?.slice(4, 15)}</h3>
      <p>{post.content}</p>
    </>
  )
}
