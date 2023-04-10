import Game from '@/interfaces/game.interface'
import './globals.css'
import UpcomingContent from '@/componets/UpcomingContent'



// Function:    getGame()
// Description: makes a request to the api to get game information info
// Parameters:  N/A
// Return:      the response containing all the upcoming games
async function getGames() {
  const res = await fetch('http://localhost:3000/api/games', { cache: 'no-store' })

  return res.json()
}



export default async function Home() {
  let games: Game[] = await getGames()
  
  return (
    <div className='container'>
      {
        games.map((game) => {
          return <UpcomingContent 
                    key={game._id.toString()}
                    _id={game._id}
                    title={game.title} 
                    releaseDate={game.releaseDate} 
                    website={game.website}
                    platforms={game.platforms} />
        })
      }
    </div>
  )
}
