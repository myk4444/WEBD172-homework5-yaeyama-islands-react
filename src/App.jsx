// Notes:
// App.jsx holds the main data and state.
// IslandList receives the islands array as props.
// IslandList uses map() to create IslandCard components.
// IslandCard receives title and description through props.
// useState controls the Show/Hide Islands button.
// Run the project with: npm run dev

import { useState } from 'react'
import './App.css'
import IslandList from './IslandList.jsx'

function App() {
  // Controls whether the island cards are visible
  const [showIslands, setShowIslands] = useState(true)

  // Data for the Yaeyama Islands cards
  const islands = [
    {
      id: 1,
      title: "Ishigaki Island",
      description: "The main hub of the Yaeyama Islands, known for beaches, food, and easy access to nearby islands."
    },
    {
      id: 2,
      title: "Taketomi Island",
      description: "A small traditional island known for red-tile roofs, white-sand roads, and preserved Okinawan culture."
    },
    {
      id: 3,
      title: "Iriomote Island",
      description: "A lush island filled with mangroves, waterfalls, jungle, and unique wildlife."
    },
    {
      id: 4,
      title: "Kohama Island",
      description: "A peaceful island with beautiful ocean views, sugarcane fields, and a relaxed atmosphere."
    },
    {
      id: 5,
      title: "Hateruma Island",
      description: "Japan's southernmost inhabited island, famous for clear blue water and incredible night skies."
    }
  ]

  return (
    <>
      <main className="container">
        <header>
          <p className="eyebrow">WEBD 172 • Week 5</p>
          <h1>Yaeyama Islands Guide</h1>
          <p>Explore some of the beautiful islands of Yaeyama, Okinawa.</p>

          <button onClick={() => setShowIslands(!showIslands)}>
            {showIslands ? "Hide Islands" : "Show Islands"}
          </button>
        </header>

        {/* Show IslandList only when showIslands is true */}
        {showIslands && <IslandList islands={islands} />}
      </main>
    </>
  )
}

export default App