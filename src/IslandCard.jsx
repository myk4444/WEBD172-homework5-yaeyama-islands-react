// Reusable card component that receives title and description as props
function IslandCard({ title, description }) {
  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default IslandCard