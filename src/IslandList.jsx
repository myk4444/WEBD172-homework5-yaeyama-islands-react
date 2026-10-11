import IslandCard from './IslandCard.jsx'

// Receives the islands array as a prop and creates one IslandCard for each island
function IslandList({ islands }) {
  return (
    <section className="course-list">
      {/* map() turns each island object into an IslandCard component */}
      {islands.map(function(island) {
        return (
          <IslandCard
            key={island.id}
            title={island.title}
            description={island.description}
          />
        )
      })}
    </section>
  )
}

export default IslandList