import Game from '@/interfaces/game.interface'
import './globals.css'
import UpcomingContent from '@/componets/UpcomingContent'



// Function:    getGame()
// Description: makes a request to the api to get game information info
// Parameters:  N/A
// Return:      the response containing all the upcoming games
async function getGames() {
  const res = await fetch(process.env.baseURL + '/api/games', { cache: 'no-store' })

  return res.json()
}



export default async function Home() {
  let games: Game[] = await getGames()
  let today: Date = new Date()
  
  return (
    <div className='container'>
      <h2>Recently Released</h2>
      <div className='content-container'>
        {
          games.map((game) => {
            // if the date of the game's release is less to today's date, display the
            // game in the recently released section
            if (new Date(game.releaseDate) < today) {
              return <UpcomingContent 
                        key={game._id.toString()}
                        _id={game._id}
                        title={game.title} 
                        releaseDate={game.releaseDate}
                        image={game.image} 
                        website={game.website}
                        platforms={game.platforms} />
            }
            else {
              return null
            }
          })
        }
      </div>
      <h2>Coming Soon</h2>
      <div className='content-container'>
        {
          games.map((game) => {
            // if the date of the game's release is greater than today's date, display the
            // game in the coming soon section
            if (new Date(game.releaseDate) > today) {
              return <UpcomingContent 
                        key={game._id.toString()}
                        _id={game._id}
                        title={game.title} 
                        releaseDate={game.releaseDate}
                        image={game.image} 
                        website={game.website}
                        platforms={game.platforms} />
            }
            else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}
