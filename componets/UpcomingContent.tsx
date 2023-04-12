import '@/app/globals.css'
import GamePlatform from './GamePlatform'
import Game from '@/interfaces/game.interface'



const UpcomingContent: React.FC<Game> = ({title, releaseDate, website, image, platforms}) => {
  const formattedDate: Date = new Date(releaseDate)

  return (
    <div className='upcoming-content'>
      { image ?
      <div className='game-image'>
        <img src={image}/>
      </div> 
      :null }
      <div className='game-info'>
        <div className='date'>
          <span>
            { formattedDate.toLocaleString('default', { month: 'short' }) }
          </span>
          <span>
            { formattedDate.toLocaleString('default', { day: '2-digit' }) }
          </span>
        </div>
        <div className='game'>
          <div className='game-title'>{title}</div>
          <div className='game-website'>
            <a href={website} target='_blank'>
              <img src='external-site.svg'/>
            </a>
          </div>
          <div className='game-platforms'>
            {
              platforms.map(platform => {
                return <GamePlatform 
                          key={platform.name} 
                          platform={platform.name} 
                          website={platform.website} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}



export default UpcomingContent;