import '@/app/globals.css'



interface IProps {
  platform: string,
  website: string
}



const GamePlatform: React.FC<IProps> = ({platform, website}) => {
  // holds the filename for the logo to displayed
  let logoFilename = 'pc.svg'

  // switch case that matches the platform image to the platform name
  switch (platform) {
    case 'PS4':
    case 'PS5':
      logoFilename = 'playstation.svg'
      break;
    case 'One':
    case 'Series':
      logoFilename = 'xbox.svg'
      break;
    case 'Switch':
      logoFilename = 'nintendo-switch.svg'
      break;
    case 'iOS':
      logoFilename = 'apple.svg'
      break;
    case 'Android':
      logoFilename = 'android.svg'
      break;
    default:
      break;
  }

  return (
    <a className='platform-info' href={website} target='_blank'>
      <img src={logoFilename}/>
      <span>{platform}</span>
    </a>
  )
}



export default GamePlatform