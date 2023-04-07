import Game from '@/interfaces/game.interface'
import './globals.css'
import UpcomingContent from '@/componets/UpcomingContent'



export default function Home() {
  let games: Game[] = []

  return (
    <div className='container'>
      {
        games.map((game) => {
          return <UpcomingContent 
                    key={game.title}
                    title={game.title} 
                    releaseDate={game.releaseDate} 
                    website={game.website}
                    platforms={game.platforms} />
        })
      }
    </div>
  )
}
