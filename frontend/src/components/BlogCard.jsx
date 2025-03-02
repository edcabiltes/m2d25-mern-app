import { Link } from "react-router-dom"

export default function BlogCard({ post }) {
    let date = new Date(post.dateCreated)
    let stringDate = date.toString()

  return (
    <Link to={`/read-blog/${post._id}`} className="post">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{stringDate.slice(4, 15)}</p>
    </Link>
  )
}
