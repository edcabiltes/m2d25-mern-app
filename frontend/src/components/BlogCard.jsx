export default function BlogCard({ post }) {
    let date = new Date(post.dateCreated)
    let stringDate = date.toString()

  return (
    <div className="post">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{stringDate.slice(4, 15)}</p>
    </div>
  )
}
